"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { Calendar, Sparkles, Phone } from "lucide-react"
import { PLANITY_URL, TREATWELL_URL } from "@/data/tarifs"
import styles from "./Nav.module.css"

export default function Nav() {
  const [open, setOpen] = useState(false)
  const [bookOpen, setBookOpen] = useState(false)
  const bookRef = useRef<HTMLDivElement>(null)

  function close() {
    setOpen(false)
  }

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (bookRef.current && !bookRef.current.contains(e.target as Node)) {
        setBookOpen(false)
      }
    }
    document.addEventListener("click", handleClickOutside)
    return () => document.removeEventListener("click", handleClickOutside)
  }, [])

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
          <div className={styles.bookWrap} ref={bookRef}>
            <button
              className={styles.cta}
              onClick={() => setBookOpen(!bookOpen)}
              aria-expanded={bookOpen}
            >
              Réserver
            </button>
            {bookOpen && (
              <div className={styles.bookMenu}>
                <a
                  href={PLANITY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bookLink}
                  onClick={() => setBookOpen(false)}
                >
                  <Calendar size={16} strokeWidth={1.5} />
                  Planity
                </a>
                <a
                  href={TREATWELL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.bookLink}
                  onClick={() => setBookOpen(false)}
                >
                  <Sparkles size={16} strokeWidth={1.5} />
                  Treatwell
                </a>
                <div className={styles.bookDivider} />
                <a
                  href="tel:+33143738330"
                  className={styles.bookLink}
                  onClick={() => setBookOpen(false)}
                >
                  <Phone size={16} strokeWidth={1.5} />
                  01 43 73 83 30
                </a>
              </div>
            )}
          </div>
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
          <Calendar size={18} strokeWidth={1.5} />
          Réserver sur Planity
        </a>
        <a
          href={TREATWELL_URL}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.drawerCtaSecondary}
          onClick={close}
        >
          <Sparkles size={18} strokeWidth={1.5} />
          Réserver sur Treatwell
        </a>
        <a
          href="tel:+33143738330"
          className={styles.drawerCtaSecondary}
          onClick={close}
        >
          <Phone size={18} strokeWidth={1.5} />
          01 43 73 83 30
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
