import { useState } from "react";
import { ChevronDown } from "lucide-react";

import { featuredFaqs } from "../../data/faqs";

import Container from "../common/Container";
import SectionHeading from "../common/SectionHeading";

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <article
      className={`
        group
        overflow-hidden
        rounded-2xl
        border
        bg-gray-50
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-orange-300
        hover:shadow-[0_15px_35px_rgba(249,115,22,0.12)]
        ${
          isOpen
            ? "border-orange-300 shadow-[0_15px_35px_rgba(249,115,22,0.12)]"
            : "border-slate-200"
        }
      `}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-${faq.id}`}
        className="
          flex
          w-full
          items-center
          justify-between
          gap-4
          px-6
          py-5
          text-left
          transition-all
          duration-300
          group-hover:bg-orange-50/40
        "
      >
        <span className="text-lg font-semibold text-slate-900">
          {faq.question}
        </span>

        <ChevronDown
          className={`
            h-5
            w-5
            shrink-0
            transition-all
            duration-300
            ${
              isOpen
                ? "rotate-180 text-orange-500"
                : "text-slate-500 group-hover:text-orange-500"
            }
          `}
        />
      </button>

      <div
        id={`faq-${faq.id}`}
        className={`
          grid
          transition-all
          duration-300
          ease-in-out
          ${
            isOpen
              ? "grid-rows-[1fr] border-t border-orange-100"
              : "grid-rows-[0fr]"
          }
        `}
      >
        <div className="overflow-hidden">
          <div className="bg-orange-50/20 px-6 py-5 leading-7 text-slate-600">
            {faq.answer}
          </div>
        </div>
      </div>
    </article>
  );
}

function FAQSection() {
  const [openId, setOpenId] = useState(
    featuredFaqs[0]?.id ?? null
  );

  if (featuredFaqs.length === 0) {
    return null;
  }

  function handleToggle(id) {
    setOpenId((current) =>
      current === id ? null : id
    );
  }

  return (
    <section className="bg-slate-50 py-14">
      <Container size="md">
        <SectionHeading
          eyebrow="Frequently Asked Questions"
          title="Answers to Common Questions"
          description="Here are some of the questions we receive most often. If you need more information, feel free to contact us or request a quotation."
          align="center"
        />

        <div className="mt-14 space-y-5">
          {featuredFaqs.map((faq) => (
            <FAQItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

export default FAQSection;