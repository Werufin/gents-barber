import { reviews } from "@/data/reviews"
import { PLANITY_URL } from "@/data/tarifs"
import styles from "./Reviews.module.css"

export default function Reviews() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">AVIS CLIENTS</span>
          <h2>
            5.0/5 sur Google{" "}
            <span className={styles.count}>
              — 4.9/5 sur Planity — 237 avis
            </span>
          </h2>
        </div>
        <div className={styles.grid}>
          {reviews.map((review, i) => (
            <div key={i} className={styles.card}>
              <div
                className={styles.stars}
                role="img"
                aria-label={`${review.rating} étoiles sur 5`}
              >
                {"★".repeat(review.rating)}
              </div>
              <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
              <div className={styles.cardFooter}>
                <span className={review.source === "google" ? styles.badgeGoogle : styles.badge}>
                  <span className={styles.badgeCheck} aria-hidden="true">
                    {review.source === "google" ? "G" : "✓"}
                  </span>
                  {review.author}
                </span>
                <span className={styles.date}>{review.date}</span>
              </div>
            </div>
          ))}
        </div>
        <a
          href={PLANITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          Voir tous les avis sur Planity
        </a>
      </div>
    </section>
  )
}
