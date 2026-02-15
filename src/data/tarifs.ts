export interface Prestation {
  name: string
  duration: string
  price: number
  fromPrice?: boolean
}

export interface TarifCategory {
  title: string
  prestations: Prestation[]
}

// NOTE: Le salon s'appelle "Gents Barber" sur Planity mais "Gents Coiffure" sur Google Business Profile et Instagram.
// L'incohérence de nom affaiblit le SEO local (signal NAP). À harmoniser quand le client tranchera.
export const PLANITY_URL = "https://www.planity.com/gents-barber-75011-paris"

export const tarifs: TarifCategory[] = [
  {
    title: "Coupes",
    prestations: [
      { name: "Adulte", duration: "30min", price: 17 },
      { name: "Enfant (- de 12 ans)", duration: "20min", price: 15 },
      { name: "Coupe + shampoing", duration: "30min", price: 19 },
      { name: "Contour", duration: "10min", price: 5 },
      { name: "Décoloration", duration: "2h 10min", price: 60, fromPrice: true },
      { name: "Coloration", duration: "40min", price: 20, fromPrice: true },
      { name: "Coloration barbe", duration: "20min", price: 15, fromPrice: true },
    ],
  },
  {
    title: "Barbe",
    prestations: [
      { name: "Barbe simple", duration: "10min", price: 10 },
      { name: "Barbe + serviette chaude", duration: "20min", price: 15 },
    ],
  },
  {
    title: "Forfaits & Soins",
    prestations: [
      { name: "Coupe + barbe", duration: "30min", price: 23 },
      { name: "Coupe + barbe + serviette chaude", duration: "40min", price: 25 },
      { name: "Coupe + shampoing + soin de cheveux", duration: "30min", price: 25 },
      { name: "Masque noir + vapeur", duration: "20min", price: 20 },
      { name: "Épilation visage à la cire", duration: "10min", price: 8 },
      { name: "Lissage brésilien + soin à la kératine", duration: "45min", price: 65, fromPrice: true },
      { name: "Coupe + barbe + shampoing + décoloration", duration: "2h 40min", price: 80 },
    ],
  },
]
