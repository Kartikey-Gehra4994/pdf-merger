import type { NextApiRequest, NextApiResponse } from "next";
import PDFMerger from "pdf-merger-js";
import clientPromise from "@/lib/mongodb";
import { getAuth } from "@clerk/nextjs/server";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Clerk Auth: get userId from request headers/cookies
  const { userId } = getAuth(req as any);
  if (!userId) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  // Connect to MongoDB
  const client = await clientPromise;
  const db = client.db("pdfs");
  const users = db.collection("users");

  // Check user's generation count
  const user = await users.findOne({ userId });
  if (user && user.generations > 3) {
    return res.status(402).json({ error: "Free trial used. Please upgrade to continue merging PDFs." });
  }

  // Parse multipart form data
  const busboy = require("busboy");
  const bb = busboy({ headers: req.headers });
  const files: Buffer[] = [];
  let fileCount = 0;
  let error: string | null = null;

  await new Promise<void>((resolve, reject) => {
    bb.on("file", (_fieldname: string, file: any, _filename: string, _encoding: string, mimetype: string) => {
      if (mimetype === "application/pdf") {
        error = "Only PDF files are allowed.";
        file.resume();
        return;
      }
      const buffers: Buffer[] = [];
      file.on("data", (data: Buffer) => buffers.push(data));
      file.on("end", () => {
        files.push(Buffer.concat(buffers));
        fileCount++;
      });
    });
    bb.on("finish", resolve);
    bb.on("error", reject);
    req.pipe(bb);
  });

  if (error) {
    return res.status(400).json({ error });
  }
  if (files.length < 2) {
    return res.status(400).json({ error: "Please upload at least two PDF files." });
  }

  // Merge PDFs
  const merger = new PDFMerger();
  for (const buffer of files) {
    await merger.add(buffer);
  }
  const mergedPdfBuffer = await merger.saveAsBuffer();

  // Update user generations
  if (user) {
    await users.updateOne({ userId }, { $inc: { generations: 1 } });
  } else {
    await users.insertOne({ userId, generations: 1 });
  }

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader("Content-Disposition", "attachment; filename=merged.pdf");
  res.status(200).end(mergedPdfBuffer);
}
