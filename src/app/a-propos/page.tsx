import type { Metadata } from "next"
import Image from "next/image"
import { PLANITY_URL } from "@/data/tarifs"
import styles from "./page.module.css"

export const metadata: Metadata = {
  title: "À Propos",
  description:
    "Découvrez Gents Coiffure, barbier à Nation Paris 11. Karim et Sofian vous accueillent au 68 Rue de Montreuil dans un cadre industriel-chic. Coupes homme, barbe, soins visage.",
  openGraph: {
    title: "À Propos | Gents Coiffure — Barbier Paris 11 Nation",
    description:
      "Découvrez Gents Coiffure, barbier à Nation Paris 11. Karim et Sofian vous accueillent dans un cadre industriel-chic.",
    url: "https://TODO-DOMAINE.fr/a-propos",
  },
}

const team = [
  {
    name: "Karim",
    role: "Fondateur & Barbier",
    bio: "Karim a ouvert Gents Coiffure avec une idée simple : un salon où chaque client se sent chez lui. Ses clients le décrivent comme « aux petits soins », « très professionnel » et « bienveillant ». Le café offert à l'arrivée, c'est sa touche.",
  },
  {
    name: "Sofian",
    role: "Barbier",
    bio: "Sofian complète l'équipe avec son énergie et sa rigueur. Coupes classiques, dégradés, barbe — il s'adapte à chaque style avec un résultat régulier et soigné.",
  },
]

const values = [
  {
    title: "L'accueil",
    text: "« On se sent comme à la maison. » Les clients reviennent pour le savoir-faire, mais aussi pour l'ambiance et le café.",
  },
  {
    title: "Le rapport qualité-prix",
    text: "« Un des meilleurs rapports qualité / prix. » Des prestations soignées à tarif juste, sans surprise.",
  },
  {
    title: "La régularité",
    text: "« Régulier dans son travail. » Les clients reviennent parce que le résultat est le même à chaque visite.",
  },
]

export default function AProposPage() {
  return (
    <>
      <div className={styles.header}>
        <div className="container">
          <span className="section-tag">NOTRE HISTOIRE</span>
          <h1 className={styles.headerTitle}>Le Salon</h1>
          <p className={styles.headerSub}>
            Gents Coiffure, c&apos;est un salon de barbier ancré dans le quartier
            Nation, Paris 11ème. Un lieu où le savoir-faire et l&apos;accueil
            font la différence.
          </p>
        </div>
      </div>

      <section className={styles.story}>
        <div className="container">
          <p className={styles.storyText}>
            Ouvert au 68 Rue de Montreuil, entre la place de la Nation et le
            métro Rue des Boulets, Gents Coiffure est un salon de barbier ancré
            dans le 11ème arrondissement. Un espace où chaque client se sent
            bien, avec des coupes et barbes réalisées dans les règles de
            l&apos;art.
          </p>
          <p className={styles.storyText}>
            Le cadre industriel-chic — briques apparentes, fauteuils en cuir,
            ambiance lounge — est pensé pour que chaque visite soit un moment de
            détente autant qu&apos;un rendez-vous style. Et le café offert à
            l&apos;arrivée, c&apos;est la touche Gents.
          </p>
        </div>
      </section>

      <section className={styles.teamSection}>
        <div className="container">
          <span className="section-tag">L&apos;ÉQUIPE</span>
          <h2 className={styles.teamTitle}>Karim & Sofian</h2>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <h3 className={styles.teamName}>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.valuesSection}>
        <div className="container">
          <span className="section-tag">NOS VALEURS</span>
          <h2 className={styles.valuesTitle}>Ce qui nous guide</h2>
          <div className={styles.valuesGrid}>
            {values.map((value) => (
              <div key={value.title} className={styles.valueCard}>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueText}>{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gallerySection}>
        <div className="container">
          <span className="section-tag">LE LIEU</span>
          <h2 className={styles.valuesTitle}>Notre salon</h2>
          <div className={styles.galleryGrid}>
            <div className={styles.galleryImgWrap}>
              <Image
                src="/images/facade-angle.webp"
                alt="Façade Gents Coiffure vue en angle — enseigne et barber pole"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.galleryImg}
              />
            </div>
            <div className={styles.galleryImgWrap}>
              <Image
                src="/images/interior-full.webp"
                alt="Vue complète de l'intérieur — fauteuils, bac à shampoing et horloge vintage"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.galleryImg}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.ctaTitle}>Venez nous rencontrer</h2>
          <p className={styles.ctaText}>
            68 Rue de Montreuil, Paris 11 — Du mardi au dimanche, 10h-20h.
          </p>
          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            Prendre rendez-vous
          </a>
        </div>
      </section>
    </>
  )
}
