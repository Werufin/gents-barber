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
  metadataBase: new URL("https://gents-barber.fr"),
  title: {
    default: "Gents Barber | Barbier Paris 11 Nation",
    template: "%s | Gents Barber — Barbier Paris 11 Nation",
  },
  description:
    "Barbier à Paris 11 Nation. Coupes homme, barbe, soins visage. RDV en ligne sur Planity. 68 Rue de Montreuil, métro Rue des Boulets.",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Gents Barber",
  },
}

const barberShopSchema = {
  "@context": "https://schema.org",
  "@type": "BarberShop",
  name: "Gents Barber",
  image: "https://gents-barber.fr/images/facade.webp",
  url: "https://gents-barber.fr",
  telephone: "+33143738330",
  priceRange: "€",
  sameAs: [
    "https://www.instagram.com/gents_coiffure/",
    "https://www.planity.com/gents-barber-75011-paris",
    "https://www.google.com/maps/place/68+Rue+de+Montreuil+75011+Paris",
  ],
  areaServed: {
    "@type": "City",
    name: "Paris",
    sameAs: "https://www.wikidata.org/wiki/Q90",
  },
  hasMap: "https://www.google.com/maps/dir/?api=1&destination=68+Rue+de+Montreuil+75011+Paris",
  address: {
    "@type": "PostalAddress",
    streetAddress: "68 Rue de Montreuil",
    addressLocality: "Paris",
    postalCode: "75011",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.851,
    longitude: 2.389,
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
