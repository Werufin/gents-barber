import { PLANITY_URL, TREATWELL_URL } from "@/data/tarifs"
import styles from "./Cta.module.css"

export default function Cta() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <h2 className={styles.title}>Passez <em>nous voir.</em></h2>
        <p className={styles.text}>
          Réservation en ligne, confirmation immédiate, paiement sur place.
        </p>
        <div className={styles.ctas}>
          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Réserver sur Planity
          </a>
          <a
            href={TREATWELL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            Réserver sur Treatwell
          </a>
        </div>
      </div>
    </section>
  )
}
