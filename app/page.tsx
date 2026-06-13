export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Weather-Powered Sales Intelligence
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Your Restaurant&apos;s Daily Sales
          <span className="text-[#58a6ff]"> Before They Happen</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Combine live weather forecasts with your POS history to forecast revenue and auto-generate optimized staff schedules — so you&apos;re never over- or under-staffed.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Predicting — $17/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No contracts.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3 text-sm">
          {["Weather API Integration", "POS Data Sync", "ML Sales Forecasting", "Staff Schedule Generator", "Daily Email Reports"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] px-4 py-1.5 rounded-full text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center shadow-xl">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="text-5xl font-bold text-white mb-1">$17</div>
          <p className="text-[#8b949e] text-sm mb-6">per month, per location</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited sales predictions",
              "7-day weather forecast integration",
              "POS system sync (Square, Toast, Clover)",
              "Auto-generated staff schedules",
              "Daily forecast email digest",
              "Historical accuracy reports"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which POS systems are supported?</h3>
            <p className="text-[#8b949e] text-sm">We currently integrate with Square, Toast, and Clover. More integrations are added regularly based on customer demand.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How accurate are the sales predictions?</h3>
            <p className="text-[#8b949e] text-sm">After 30 days of historical data, our model typically achieves 85–92% accuracy. Accuracy improves the more data you provide.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Cancel anytime from your billing portal with no penalties or hidden fees. You keep access until the end of your billing period.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#8b949e]">
        &copy; {new Date().getFullYear()} Restaurant POS Sales Predictor. All rights reserved.
      </footer>
    </main>
  );
}
