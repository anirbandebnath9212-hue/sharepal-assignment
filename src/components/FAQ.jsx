import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const faqs = [
  {
    question: "How can I rent from SharePal?",
    answer:
      "Choose your product, select your rental dates, add the product to your cart, and complete the booking process.",
  },
  {
    question:
      "If I rent multiple products, do I need to extend the rental duration for all or partial extension is possible?",
    answer:
      "You can manage rental extensions according to the individual product and rental requirements.",
  },
  {
    question: "When does the rental start?",
    answer:
      "The rental starts according to the delivery date selected during the booking process.",
  },
  {
    question:
      "What will be the condition of the products at the time of delivery?",
    answer:
      "Products are checked before delivery and are provided in usable condition.",
  },
  {
    question: "Why is verification required?",
    answer:
      "Verification helps SharePal maintain a secure rental experience for both customers and products.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">

      <h2>Frequently Asked Questions (FAQs)</h2>

      <div className="faq-list">

        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${
              openIndex === index ? "open" : ""
            }`}
            key={faq.question}
          >

            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
            >
              <span>{faq.question}</span>

              <FiChevronDown />
            </button>

            {openIndex === index && (
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            )}

          </div>
        ))}

      </div>

      <button className="more-faq-button">
        View more FAQ's
      </button>

    </section>
  );
}

export default FAQ;