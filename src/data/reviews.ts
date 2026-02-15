export interface Review {
  text: string
  rating: number
  date: string
  author: string
  source: "google" | "planity"
}

export const reviews: Review[] = [
  {
    text: "Après avoir testé différents coiffeurs plus ou moins chers ces dernières années. J'ai été absolument convaincu par GENTS. Meilleur coiffeur de Paris, rapide, hyper gentils et surtout de très bons coiffeurs. 5 étoiles sans aucun doute méritées. En gros la même expérience qu'un coiffeur « premium » mais en plus rapide, plus agréable et moins cher.",
    rating: 5,
    date: "Décembre 2025",
    author: "Avis Google",
    source: "google",
  },
  {
    text: "Les salons Barbier ça ne manque pas dans le quartier, mais chez Gent's Barber l'accueil est vraiment top. Karim est aux petits soins avec ses clients, on se sent comme à la maison. Superbe coupe.",
    rating: 5,
    date: "Juillet 2024",
    author: "Client vérifié Planity",
    source: "planity",
  },
  {
    text: "Toujours un plaisir de venir ici et de loin la meilleure expérience coiffeur/barber ! Un accueil toujours avec le sourire et un petit café proposé à chaque fois, on se sent vraiment comme à la maison. Mention spéciale à Karim pour sa gentillesse et son professionnalisme.",
    rating: 5,
    date: "Février 2025",
    author: "Nathou V.",
    source: "google",
  },
  {
    text: "Très bon coiffeur que je recommande à 100%. Un des meilleurs rapports qualité / prix.",
    rating: 5,
    date: "Août 2024",
    author: "Client vérifié Planity",
    source: "planity",
  },
  {
    text: "Coiffeur à l'écoute, qui prend soin de son client. Je suis venu me couper avec mon fils, résultats impeccable. Un café est offert pendant l'attente. Je recommande coupe et barbe très bien effectuée.",
    rating: 5,
    date: "Janvier 2024",
    author: "Nicolas Da Silva",
    source: "google",
  },
]
