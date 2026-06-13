import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant POS Sales Predictor",
  description: "Predict restaurant daily sales from weather forecasts and historical POS data. Optimize staff scheduling with AI-powered insights."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d60c7fc8-3f1e-4c24-bc49-c9827dabc89d"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
