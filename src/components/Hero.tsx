"use client"

import { useRef, useState } from "react"
import Link from "next/link"
import { PLANITY_URL } from "@/data/tarifs"
import styles from "./Hero.module.css"

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [paused, setPaused] = useState(false)

  function toggleVideo() {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      video.play()
      setPaused(false)
    } else {
      video.pause()
      setPaused(true)
    }
  }

  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className={styles.video}
          poster="/images/facade-front.webp"
          aria-label="Vidéo d'ambiance du salon Gents Coiffure"
        >
          <source src="/images/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <div className={styles.badge}>BARBIER &middot; PARIS 11</div>
        <h1 className={styles.title}>
          GENTS
          <br />
          <span className={styles.outline}>COIFFURE</span>
        </h1>
        <p className={styles.sub}>
          Coupes nettes. Barbes sculptées.
          <br />
          L&apos;expérience barbier à Nation.
        </p>
        <p className={styles.proof}>Noté 5.0/5 sur Google — 237 avis</p>
        <div className={styles.ctas}>
          <a
            href={PLANITY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Réserver sur Planity
          </a>
          <Link href="/tarifs" className="btn btn-ghost">
            Voir les tarifs
          </Link>
        </div>
      </div>
      <div className={styles.scroll}>
        <button
          className={styles.pauseBtn}
          onClick={toggleVideo}
          aria-label={paused ? "Lire la vidéo" : "Mettre en pause la vidéo"}
        >
          {paused ? "▶" : "❚❚"}
        </button>
        <span className={styles.scrollText}>SCROLL</span>
        <div className={styles.scrollLine} />
      </div>
    </section>
  )
}
