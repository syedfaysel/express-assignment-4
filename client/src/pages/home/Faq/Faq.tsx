import SectionLayout from "@/components/SectionLayout";
import { useState } from "react";

const Faq = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);

  const faqData: FaqItem[] = [
    {
      question: "What products do you offer?",
      answer:
        "We offer a wide range of stationery products, including office supplies, school stationery, notebooks, pens, markers, art & craft materials, and more.",
    },
    {
      question: "How do I place an order?",
      answer:
        "Simply browse through our product categories, select the items you'd like to purchase, and proceed to checkout. You can pay via credit card, PayPal, or other available payment methods.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Currently, we offer shipping within the country. However, we are planning to expand to international markets soon. Stay tuned for updates!",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of purchase for products that are unused and in their original packaging. Please visit our 'Returns & Exchanges' page for more details.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can reach our customer support team via email at support@example.com or by using the contact form on our website. We strive to respond within 24 hours.",
    },
  ];

  interface FaqItem {
    question: string;
    answer: string;
  }

  const toggle = (index: number): void => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <SectionLayout title="Frequently Asked Questions">
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-500/50 py-3 last-of-type:border-b-0">
            <button
              onClick={() => toggle(index)}
              className="flex h-full w-full items-center justify-between font-medium text-black outline-none dark:text-white">
              <span>{faq.question}</span>
              <span className="rounded-full">
                <svg
                  className="ml-8 size-3 shrink-0 dark:fill-white"
                  xmlns="http://www.w3.org/2000/svg">
                  <rect
                    y="5"
                    width="12"
                    height="2"
                    rx="1"
                    className={`origin-center transform transition duration-200 ease-out ${
                      isOpen === index && "!rotate-180"
                    }`}
                  />
                  <rect
                    y="5"
                    width="12"
                    height="2"
                    rx="1"
                    className={`origin-center rotate-90 transform transition duration-200 ease-out ${
                      isOpen === index && "!rotate-180"
                    }`}
                  />
                </svg>
              </span>
            </button>
            <div
              className={`grid overflow-hidden text-zinc-500 transition-all duration-300 ease-in-out ${
                isOpen === index
                  ? "grid-rows-[1fr] pb-1 pt-3 opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}>
              <div className="overflow-hidden pr-4 text-sm">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </SectionLayout>
  );
};

export default Faq;
