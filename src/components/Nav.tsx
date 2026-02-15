"use client"

import { useState } from "react"
import Link from "next/link"
import { PLANITY_URL } from "@/data/tarifs"
import styles from "./Nav.module.css"

export default function Nav() {
  const [open, setOpen] = useState(false)

  function close() {
    setOpen(false)
  }

  return (
    <nav className={styles.nav} aria-label="Navigation principale">
      <div className={styles.inner}>
        <Link href="/" className={styles.logo} aria-label="Gents Coiffure — Accueil">
          GENTS<span className={styles.logoAccent}>COIFFURE</span>
        </Link>

        {/* Desktop links */}
        <div className={styles.links}>
          <Link href="/tarifs" className={styles.link}>
            Tarifs
          </Link>
          <Link href="/a-propos" className={styles.link}>
            Le Salon
          </Link>
          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.cta}
          >
            Réserver
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`${styles.burger} ${open ? styles.burgerOpen : ""}`}
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        aria-hidden={!open}
      >
        <Link href="/tarifs" className={styles.drawerLink} onClick={close}>
          Tarifs
        </Link>
        <Link href="/a-propos" className={styles.drawerLink} onClick={close}>
          Le Salon
        </Link>
        <a
          href={PLANITY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.drawerCta}
          onClick={close}
        >
          Réserver sur Planity
        </a>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className={styles.backdrop}
          onClick={close}
          aria-hidden="true"
        />
      )}
    </nav>
  )
}
