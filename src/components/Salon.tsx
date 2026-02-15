import Image from "next/image"
import { Armchair, Warehouse, Coffee } from "lucide-react"
import styles from "./Salon.module.css"

export default function Salon() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">LE SALON</span>
          <h2>Indus. Chic. <em>Nation.</em></h2>
        </div>
        <div className={styles.gallery}>
          <div className={`${styles.imgWrap} ${styles.imgLarge}`}>
            <Image
              src="/images/interior-chairs.webp"
              alt="Intérieur du salon Gents Coiffure — fauteuils barbier et mur de briques"
              fill
              sizes="(max-width: 768px) 100vw, 60vw"
              className={styles.img}
              loading="lazy"
            />
          </div>
          <div className={styles.imgWrap}>
            <Image
              src="/images/facade.webp"
              alt="Façade du salon Gents Coiffure — 68 Rue de Montreuil, Paris 11"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className={styles.img}
            />
          </div>
          <div className={styles.imgWrap}>
            <Image
              src="/images/interior-lounge.webp"
              alt="Espace lounge Gents Coiffure — canapé Chesterfield et déco industrielle"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className={styles.img}
            />
          </div>
        </div>
        <div className={styles.features}>
          <div className={styles.feature}>
            <Armchair size={20} strokeWidth={1.5} />
            <span>Fauteuils premium</span>
          </div>
          <div className={styles.feature}>
            <Warehouse size={20} strokeWidth={1.5} />
            <span>Déco industrielle</span>
          </div>
          <div className={styles.feature}>
            <Coffee size={20} strokeWidth={1.5} />
            <span>Ambiance lounge</span>
          </div>
        </div>
      </div>
    </section>
  )
}
