"use client"

import { useState } from "react"
import { faq } from "@/data/faq"
import styles from "./page.module.css"

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className={styles.faqList}>
      {faq.map((item, i) => (
        <div key={i} className={styles.faqItem}>
          <button
            className={styles.faqQuestion}
            onClick={() => toggle(i)}
            aria-expanded={openIndex === i}
          >
            {item.question}
            <span
              className={`${styles.faqIcon} ${openIndex === i ? styles.faqIconOpen : ""}`}
            >
              +
            </span>
          </button>
          <div
            className={`${styles.faqAnswer} ${openIndex === i ? styles.faqAnswerOpen : ""}`}
          >
            <p className={styles.faqAnswerText}>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
