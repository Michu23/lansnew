"use client";
import React, { useState } from "react";
import styles from "./Faqs.module.css";

const faqs = [
  {
    question: "What makes Lanstitut different from other agencies?",
    answer:
      "Lanstitut stands out because we provide everything you need in one place. We offer language training, free job recruitment, visa support, and help after you've relocated. This makes us the perfect choice for nurses who want to work in Germany, as we take care of all the important steps along the way.",
  },
  {
    question: "Are classes available online or offline?",
    answer:
      "Yes, we offer both online and offline classes. You can pick the option that works best for you, whether you prefer studying from home or attending classes in person.",
  },
  {
    question: "Do you provide flexible class schedules?",
    answer:
      "Absolutely! We understand that many of our students are busy with work or other commitments. That's why we offer flexible schedules to fit your lifestyle. You can choose a time that works best for you.",
  },
  {
    question: "How can I get started with Lanstitut?",
    answer:
      "Getting started is easy! You can visit our website at www.lanstitut.com or get in touch with our support team. We're happy to guide you through the process and answer any questions you have.",
  },
];

export default function FaqSection() {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const toggleFaq = (index) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <div className="w-100 d-flex justify-content-center align-items-center h-100 align-self-center align-content-center">
      <div className={styles.faqSection}>
        <div className={styles.headerContainer}>
          <span className={styles.mainTitle}>All the A's to your Q's</span>
          <span className={styles.subtitle}>
            Everything you need to know about our services and process.
          </span>
        </div>
        <div className={styles.faqContainer}>
          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`${styles.faqItem} ${
                  expandedIndex === index ? styles.expanded : ""
                }`}
                onClick={() => toggleFaq(index)}
              >
                <div className={styles.faqItemContent}>
                  <div className={styles.textContainer}>
                    <span className={styles.questionText}>{faq.question}</span>
                    <span className={styles.answerText}>{faq.answer}</span>
                  </div>
                  <div className={styles.iconWrapper}>
                    <div className={styles.toggleIcon}>
                      {expandedIndex === index ? (
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8.5 12H16.5M22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12Z"
                            stroke="#202020"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.5 8V16M8.5 12H16.5M22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12Z"
                            stroke="#202020"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
