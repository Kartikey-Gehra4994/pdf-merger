import React from "react";

interface UpgradePlansProps {
  onClose?: () => void;
}

const plans = [
  {
    name: "Pro",
    price: "$5/mo",
    features: [
      "Unlimited PDF merges",
      "Priority support",
      "No ads",
      "Faster processing"
    ],
    highlight: true,
    cta: "Upgrade to Pro"
  },
  {
    name: "Team",
    price: "$15/mo",
    features: [
      "All Pro features",
      "Team management",
      "Usage analytics",
      "Bulk merging"
    ],
    highlight: false,
    cta: "Upgrade to Team"
  },
];

const UpgradePlans: React.FC<UpgradePlansProps> = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl p-8 max-w-2xl w-full relative border border-zinc-200 dark:border-zinc-800">
      <button
        className="absolute top-4 right-4 text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200 text-2xl font-bold"
        onClick={onClose}
        aria-label="Close"
      >
        ×
      </button>
      <div className="flex flex-col items-center mb-4">
        <h2 className="text-4xl font-extrabold text-center bg-gradient-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent drop-shadow">Upgrade Your Plan</h2>
      </div>
      <p className="text-zinc-600 dark:text-zinc-300 mb-10 text-center text-lg">You have used your free trial. Unlock unlimited PDF merges and more with a premium plan!</p>
      <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
        {plans.map(plan => (
          <div
            key={plan.name}
            className={`flex-1 border rounded-2xl p-8 flex flex-col items-center shadow transition-transform hover:scale-105 ${plan.highlight ? "border-blue-500 bg-gradient-to-br from-blue-50/80 to-purple-50/60 dark:from-blue-950/60 dark:to-purple-950/40" : "border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900"}`}
          >
            <div className="text-2xl font-bold mb-2 tracking-tight text-zinc-900 dark:text-zinc-100">{plan.name}</div>
            <div className="text-3xl font-extrabold mb-4 text-blue-600 dark:text-purple-400">{plan.price}</div>
            <ul className="mb-6 text-zinc-600 dark:text-zinc-300 text-base list-disc list-inside text-left w-full max-w-xs mx-auto">
              {plan.features.map(f => (
                <li key={f} className="mb-1">{f}</li>
              ))}
            </ul>
            <button className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white font-semibold py-3 rounded-xl shadow hover:scale-105 transition text-lg mt-auto">{plan.cta}</button>
          </div>
        ))}
      </div>
      <div className="mt-10 text-center text-sm text-zinc-400 dark:text-zinc-500">
        Need a custom plan or have questions? <a href="/contact" className="text-blue-600 dark:text-purple-400 underline">Contact us</a>
      </div>
    </div>
  </div>
);

export default UpgradePlans;
