export const runtime = "nodejs";
import { NextRequest, NextResponse } from "next/server";
import PDFMerger from "pdf-merger-js";
import clientPromise from "@/lib/mongodb";
import { getAuth } from "@clerk/nextjs/server";

// export const runtime = "edge";

export async function POST(req: NextRequest) {
  const { userId } = getAuth(req);
  if (!userId) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Connect to MongoDB
  const client = await clientPromise;
  const db = client.db("pdfs");
  const users = db.collection("users");

  // Check user's generation count
  const user = await users.findOne({ userId });
  if (user && user.generations > 3) {
    return NextResponse.json({ error: "Free trial used. Please upgrade to continue merging PDFs." }, { status: 402 });
  }

  const formData = await req.formData();
  const files = formData.getAll("files");

  if (!files || files.length < 2) {
    return NextResponse.json({ error: "Please upload at least two PDF files." }, { status: 400 });
  }

  const merger = new PDFMerger();

  for (const file of files) {
    if (typeof file === "object" && "arrayBuffer" in file) {
      const buffer = Buffer.from(await file.arrayBuffer());
      await merger.add(buffer);
    }
  }

  const mergedPdfBuffer = await merger.saveAsBuffer();

  // After successful merge, increment generation count
  if (user) {
    await users.updateOne({ userId }, { $inc: { generations: 1 } });
  } else {
    await users.insertOne({ userId, generations: 1 });
  }

  return new NextResponse(mergedPdfBuffer, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": "attachment; filename=merged.pdf",
    },
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};