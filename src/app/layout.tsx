import type { Metadata } from "next"
import { Bebas_Neue, DM_Sans } from "next/font/google"
import Nav from "@/components/Nav"
import Footer from "@/components/Footer"
import SchemaOrg from "@/components/SchemaOrg"
import "./globals.css"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://gents-barber-two.vercel.app"),
  title: {
    default: "Gents Coiffure | Barbier Paris 11 Nation",
    template: "%s | Gents Coiffure — Barbier Paris 11 Nation",
  },
  description:
    "Barbier à Paris 11 près de Nation. Coupe homme 17€, barbe, soins. Noté 5/5 sur Google (237 avis). RDV en ligne Planity & Treatwell. 68 rue de Montreuil.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Gents Coiffure",
  },
}

const barberShopSchema = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "Gents Coiffure",
  image: "https://gents-barber-two.vercel.app/images/facade.webp",
  url: "https://gents-barber-two.vercel.app",
  telephone: "+33143738330",
  priceRange: "€",
  address: {
    "@type": "PostalAddress",
    streetAddress: "68 Rue de Montreuil",
    addressLocality: "Paris",
    postalCode: "75011",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.8503,
    longitude: 2.3925,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "10:00",
      closes: "20:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "237",
    bestRating: "5",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Client Google" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      datePublished: "2025-12-15",
      reviewBody:
        "Après avoir testé différents coiffeurs plus ou moins chers ces dernières années. J'ai été absolument convaincu par GENTS. Meilleur coiffeur de Paris, rapide, hyper gentils et surtout de très bons coiffeurs. 5 étoiles sans aucun doute méritées.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Nathou V." },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      datePublished: "2025-02-10",
      reviewBody:
        "Toujours un plaisir de venir ici et de loin la meilleure expérience coiffeur/barber ! Un accueil toujours avec le sourire et un petit café proposé à chaque fois, on se sent vraiment comme à la maison.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Client Planity" },
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      datePublished: "2024-07-15",
      reviewBody:
        "Les salons Barbier ça ne manque pas dans le quartier, mais chez Gent's Barber l'accueil est vraiment top. Karim est aux petits soins avec ses clients, on se sent comme à la maison. Superbe coupe.",
    },
  ],
  sameAs: [
    "https://www.instagram.com/gents_coiffure/",
    "https://www.planity.com/gents-barber-75011-paris",
    "https://widget.treatwell.fr/salon/gents-coiffure/",
    "https://www.google.com/maps/place/68+Rue+de+Montreuil+75011+Paris",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <head>
        <SchemaOrg data={barberShopSchema} />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
