export interface FaqItem {
  question: string
  answer: string
}

export const faq: FaqItem[] = [
  {
    question: "Faut-il prendre rendez-vous ?",
    answer: "Non, vous pouvez venir avec ou sans rendez-vous. Pour éviter l'attente, vous pouvez réserver un créneau en ligne sur Planity.",
  },
  {
    question: "Quels moyens de paiement acceptez-vous ?",
    answer: "Nous acceptons les espèces, la carte bancaire et le paiement sans contact. Le paiement se fait sur place après la prestation.",
  },
  {
    question: "Les coupes enfant sont à partir de quel âge ?",
    answer: "Le tarif enfant (15€) s'applique aux moins de 12 ans. Au-delà, c'est le tarif adulte qui s'applique.",
  },
  {
    question: "Puis-je annuler ou modifier mon rendez-vous ?",
    answer: "Oui, vous pouvez annuler ou modifier votre rendez-vous directement sur Planity jusqu'à 2 heures avant l'heure prévue.",
  },
  {
    question: "Proposez-vous la décoloration et la coloration ?",
    answer: "Oui, nous proposons la décoloration (à partir de 60€), la coloration cheveux (à partir de 20€) et la coloration barbe (à partir de 15€). La durée et le tarif varient selon la longueur et le type de cheveux.",
  },
  {
    question: "En quoi consiste le lissage brésilien ?",
    answer: "Le lissage brésilien avec soin à la kératine permet de lisser et nourrir les cheveux en profondeur. Le tarif démarre à 65€ selon la longueur. Comptez environ 45 minutes pour la prestation.",
  },
  {
    question: "Proposez-vous des soins visage ?",
    answer: "Nous proposons le masque noir avec vapeur (20€, 20min) et l'épilation du visage à la cire (8€, 10min).",
  },
]
