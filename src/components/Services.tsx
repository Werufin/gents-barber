import Link from "next/link"
import { PLANITY_URL } from "@/data/tarifs"
import styles from "./Services.module.css"

const services = [
  { name: "Coupe Adulte", duration: "30min", price: 17 },
  { name: "Coupe + Barbe", duration: "30min", price: 23 },
  { name: "Coupe + Shampoing", duration: "30min", price: 19 },
  { name: "Lissage Brésilien + Kératine", duration: "45min", price: 65, fromPrice: true },
]

export default function Services() {
  return (
    <section className={`section ${styles.section}`}>
      <div className="container">
        <div className="section-header">
          <span className="section-tag">NOS PRESTATIONS</span>
          <h2>L&apos;essentiel, <em>bien fait.</em></h2>
        </div>
        <div className={styles.grid}>
          {services.map((service) => (
            <div key={service.name} className={styles.card}>
              <div>
                <h3 className={styles.cardName}>{service.name}</h3>
                <span className={styles.cardDuration}>{service.duration}</span>
              </div>
              <div className={styles.cardBottom}>
                <span className={styles.cardPrice}>
                  {service.fromPrice && (
                    <span className={styles.cardFromPrice}>dès </span>
                  )}
                  {service.price}€
                </span>
                <a
                  href={PLANITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.cardBook}
                  aria-label={`Réserver ${service.name}`}
                >
                  Réserver →
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.more}>
          <Link href="/tarifs" className="btn btn-outline">
            Tous les tarifs & prestations
          </Link>
        </div>
      </div>
    </section>
  )
}
