"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "@/data/faq";

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion-group">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.question} className={`faq-row ${isOpen ? "open" : ""}`}>
            <button
              type="button"
              className="faq-trigger"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span className="faq-question-text">{item.question}</span>
              <span className={`faq-icon ${isOpen ? "rotated" : ""}`} aria-hidden="true">
                <ChevronDown size={18} />
              </span>
            </button>
            <div
              id={`faq-answer-${index}`}
              className="faq-content"
              hidden={!isOpen}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
