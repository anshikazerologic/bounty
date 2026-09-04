import { useState } from "react";
// import { ChevronDown } from "lucide-react";

export default function FAQSection() {
  const [active, setActive] = useState<number | null>(0);
  const faqs = [
  {
    question: "What is Bounty Hunter?",
    answer:
      "Bounty Hunter is a community where designers complete real-world creative quests and earn rewards.",
  },
  {
    question: "Who can participate?",
    answer:
      "Anyone passionate about design can participate and compete in bounties.",
  },
  {
    question: "How do rewards work?",
    answer:
      "Each bounty has its own reward amount that is paid to selected winners after completion.",
  },
  {
    question: "Is there any joining fee?",
    answer:
      "No. Joining the community is completely free.",
  },
];

  return (
    <section className="flex min-h-screen w-full items-center justify-center bg-black px-6 py-24">
      <div className="w-full max-w-4xl">
        <h2 className="mb-20 text-center font-orbitron text-5xl text-white">
          Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl border border-white/15 bg-white/5 backdrop-blur"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="flex w-full items-center justify-between px-7 py-6 text-left"
              >
                <span className="font-orbitron text-xl text-white">
                  {faq.question}
                </span>

                {/* <ChevronDown
                  className={`h-6 w-6 text-white transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                /> */}
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-7 pb-6 font-mono text-sm leading-7 text-white/70">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}