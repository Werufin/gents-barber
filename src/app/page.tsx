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
    "Barbier à Paris 11 Nation. Coupe homme dès 17€, barbe, lissage brésilien. Noté 5.0/5 sur Google. RDV en ligne sur Planity. 68 Rue de Montreuil.",
  openGraph: {
    title: "Gents Coiffure | Barbier Paris 11 Nation",
    description:
      "Barbier à Paris 11 Nation. Coupe homme dès 17€. Noté 5.0/5 sur Google. RDV en ligne sur Planity.",
    url: "https://TODO-DOMAINE.fr",
    images: ["/images/facade.webp"],
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
