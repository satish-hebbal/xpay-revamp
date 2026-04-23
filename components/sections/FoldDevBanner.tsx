import Button from "@/components/ui/Button";

export default function FoldDevBanner() {
  return (
    <section className="relative z-30 w-full bg-white pt-6 pb-6 lg:pt-8 lg:pb-8">
      <div className="max-w-[1200px] mx-auto px-6 mb-12">
        <p
          className="text-[20px] max-w-[850px] lg:text-[24px] font-medium text-[#000000]/75 leading-relaxed"
          style={{ fontFamily: "'SF Pro Display', sans-serif" }}
        >
          Reliable, developer-first payment infrastructure for every stack.{" "}
          <span className="text-[#000000]/30">
            Integrate xPay with flexible APIs, webhooks, and SDKs — go live in minutes.
          </span>
        </p>

        <div className="flex flex-wrap gap-3 mt-8">
          <Button variant="primary" size="lg" className="font-semibold">
            View API docs
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </Button>
          <Button variant="outline" size="lg" className="font-semibold">
            View on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
