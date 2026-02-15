import type { Metadata } from "next"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Salon from "@/components/Salon"
import Reviews from "@/components/Reviews"
import Location from "@/components/Location"
import Cta from "@/components/Cta"
import ScrollReveal from "@/components/ScrollReveal"

export const metadata: Metadata = {
  title: "Gents Coiffure | Barbier Paris 11 Nation",
  description:
    "Barbier à Paris 11 près de Nation. Coupe homme 17€, barbe, soins. Noté 5/5 sur Google (237 avis). RDV en ligne Planity & Treatwell. 68 rue de Montreuil.",
  openGraph: {
    title: "Gents Coiffure | Barbier Paris 11 Nation",
    description:
      "Barbier à Paris 11 près de Nation. Coupe homme 17€, barbe, soins. Noté 5/5 sur Google (237 avis). RDV en ligne Planity & Treatwell. 68 rue de Montreuil.",
    url: "https://gents-barber-two.vercel.app",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Gents Coiffure — Barbier Paris 11 Nation",
      },
    ],
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal>
        <Salon />
      </ScrollReveal>
      <ScrollReveal>
        <Reviews />
      </ScrollReveal>
      <ScrollReveal>
        <Location />
      </ScrollReveal>
      <ScrollReveal>
        <Cta />
      </ScrollReveal>
    </>
  )
}
