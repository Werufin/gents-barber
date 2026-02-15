import styles from "./Location.module.css"

export default function Location() {
  return (
    <section className="section">
      <div className="container">
        <div className={styles.grid}>
          <div>
            <span className="section-tag">NOUS TROUVER</span>
            <h2 className={styles.title}>68 Rue de Montreuil</h2>
            <p className={styles.district}>Paris 11ème — Nation</p>
            <p className={styles.seoText}>
              Situé au coeur du 11ème arrondissement, Gents Coiffure est votre
              barbier de quartier à deux pas de la place de la Nation. Accessible
              en métro depuis Rue des Boulets (M9) et Nation (M1, M2,
              M6, M9, RER A), le salon vous accueille du mardi au dimanche.
            </p>
            <div className={styles.details}>
              <div className={styles.detail}>
                <strong className={styles.detailLabel}>Métro</strong>
                <div className={styles.metroLines}>
                  <div className={styles.metroStation}>
                    <span className={styles.metroStationName}>Rue des Boulets</span>
                    <span className={styles.metroBadge} style={{ background: "#B6BD00" }}>9</span>
                  </div>
                  <div className={styles.metroStation}>
                    <span className={styles.metroStationName}>Nation</span>
                    <span className={styles.metroBadge} style={{ background: "#FFCD00", color: "#1a1a1a" }}>1</span>
                    <span className={styles.metroBadge} style={{ background: "#003CA6" }}>2</span>
                    <span className={styles.metroBadge} style={{ background: "#76C882", color: "#1a1a1a" }}>6</span>
                    <span className={styles.metroBadge} style={{ background: "#B6BD00" }}>9</span>
                    <span className={styles.metroBadgeRer} style={{ background: "#E3051C" }}>A</span>
                  </div>
                </div>
              </div>
              <div className={styles.detail}>
                <strong className={styles.detailLabel}>Horaires</strong>
                <span className={styles.detailValue}>
                  Mar — Dim : 10h — 20h
                </span>
              </div>
              <div className={styles.detail}>
                <strong className={styles.detailLabel}>Téléphone</strong>
                <a href="tel:+33143738330" className={styles.detailLink}>
                  01 43 73 83 30
                </a>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=68+Rue+de+Montreuil+75011+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Itinéraire Google Maps
            </a>
          </div>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.5!2d2.389!3d48.851!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e672178be8f4c1%3A0x4e46d63fe0e6e95e!2s68%20Rue%20de%20Montreuil%2C%2075011%20Paris!5e0!3m2!1sfr!2sfr!4v1"
              className={styles.mapIframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gents Coiffure — 68 Rue de Montreuil, 75011 Paris"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
