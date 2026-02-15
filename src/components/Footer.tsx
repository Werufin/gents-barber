import Link from "next/link"
import { PLANITY_URL, TREATWELL_URL } from "@/data/tarifs"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.bgLogo} aria-hidden="true">
        GENTS
      </div>
      <div className={`container ${styles.inner}`}>
        <div>
          <div className={styles.logo}>
            GENTS<span className={styles.logoAccent}>COIFFURE</span>
          </div>
          <p className={styles.brandText}>Barbier à Paris 11 — Nation</p>
          <p className={styles.brandText}>68 Rue de Montreuil, 75011 Paris</p>
          <div className={styles.rating}>
            <span className={styles.ratingStars}>★★★★★</span>
            <span className={styles.ratingText}>5.0/5 sur Google</span>
          </div>
        </div>
        <div>
          <p className={styles.colTitle}>Navigation</p>
          <Link href="/" className={styles.colLink}>
            Accueil
          </Link>
          <Link href="/tarifs" className={styles.colLink}>
            Tarifs
          </Link>
          <Link href="/a-propos" className={styles.colLink}>
            Le Salon
          </Link>
        </div>
        <div>
          <p className={styles.colTitle}>Contact</p>
          <a href="tel:+33143738330" className={styles.colLink}>
            01 43 73 83 30
          </a>
          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.colLink}
          >
            Réserver sur Planity
          </a>
          <a
            href={TREATWELL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.colLink}
          >
            Réserver sur Treatwell
          </a>
          <a
            href="https://www.google.com/maps/place/68+Rue+de+Montreuil+75011+Paris"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.colLink}
          >
            Google Maps
          </a>
          <a
            href="https://www.instagram.com/gents_coiffure/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.colLink}
          >
            Instagram
          </a>
        </div>
        <div>
          <p className={styles.colTitle}>Horaires</p>
          <p className={styles.colText}>Mar — Dim : 10h — 20h</p>
          <p className={styles.colText}>Lundi : Fermé</p>
        </div>
      </div>
      <div className={styles.divider} />
      <div className={styles.bottom}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Gents Coiffure. Tous droits réservés.
        </p>
      </div>
    </footer>
  )
}
