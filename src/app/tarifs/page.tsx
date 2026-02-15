import type { Metadata } from "next"
import { tarifs, PLANITY_URL } from "@/data/tarifs"
import { faq } from "@/data/faq"
import SchemaOrg from "@/components/SchemaOrg"
import FaqAccordion from "./FaqAccordion"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "Tarifs",
  description:
    "Tarifs Gents Barber, barbier Paris 11 Nation : coupe dès 17€, contour 5€, barbe 10€, forfaits dès 23€. Décoloration, lissage brésilien, coloration. 68 Rue de Montreuil. RDV sur Planity.",
  openGraph: {
    title: "Tarifs | Gents Barber — Barbier Paris 11 Nation",
    description:
      "Tarifs Gents Barber : coupe dès 17€, barbe 10€, forfaits dès 23€. Décoloration, lissage brésilien, coloration.",
    url: "https://gents-barber.fr/tarifs",
  },
}

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  provider: {
    "@type": "BarberShop",
    name: "Gents Barber",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tarifs Gents Barber",
    itemListElement: tarifs.map((category) => ({
      "@type": "OfferCatalog",
      name: category.title,
      itemListElement: category.prestations.map((p) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: p.name,
        },
        price: p.price,
        priceCurrency: "EUR",
        ...(p.fromPrice && { priceSpecification: { "@type": "PriceSpecification", minPrice: p.price, priceCurrency: "EUR" } }),
      })),
    })),
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
}

export default function TarifsPage() {
  return (
    <>
      <SchemaOrg data={serviceSchema} />
      <SchemaOrg data={faqSchema} />

      <div className={styles.header}>
        <div className="container">
          <span className="section-tag">NOS TARIFS</span>
          <h1 className={styles.headerTitle}>Tarifs & Prestations</h1>
          <p className={styles.headerSub}>
            Des prestations soignées à prix juste. Réservation en ligne,
            paiement sur place.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {tarifs.map((category) => (
            <div key={category.title} className={styles.category}>
              <h2 className={styles.categoryTitle}>{category.title}</h2>
              <div className={styles.prestationsGrid}>
                {category.prestations.map((p) => (
                  <div key={p.name} className={styles.prestationCard}>
                    <div className={styles.prestationInfo}>
                      <span className={styles.prestationName}>{p.name}</span>
                      <span className={styles.prestationDuration}>
                        {p.duration}
                      </span>
                    </div>
                    <span className={styles.prestationPrice}>
                      {p.fromPrice && (
                        <span className={styles.fromPrice}>dès </span>
                      )}
                      {p.price}€
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className="container">
          <h2 className={styles.faqTitle}>Questions fréquentes</h2>
          <FaqAccordion />
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Convaincu ?</h2>
          <p className={styles.ctaText}>
            Réservez votre créneau en quelques clics.
          </p>
          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Réserver sur Planity
          </a>
        </div>
      </section>
    </>
  )
}
