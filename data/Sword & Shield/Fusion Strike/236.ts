import { Card } from "../../../interfaces"
import Set from "../Fusion Strike"

const card: Card = {
	set: Set,

	name: {
		en: "Power Tablet",
		fr: "Pastille Puissance",
		es: "Caramelo Energético",
		it: "Compressa Energetica",
		pt: "Pastilha Poderosa",
		de: "Power-Tablette"
	},

	rarity: "Uncommon",
	category: "Trainer",

	effect: {
		en: "During this turn, your Fusion Strike Pokémon's attacks do 30 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
		fr: "Pendant ce tour, les attaques de vos Pokémon Poing de Fusion infligent 30 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		es: "Durante este turno, los ataques de tus Pokémon Golpe Fusión hacen 30 puntos de daño más al Pokémon Activo de tu rival (antes de aplicar Debilidad y Resistencia).",
		it: "Durante questo turno, gli attacchi dei tuoi Pokémon Colpo Fusione infliggono 30 danni in più al Pokémon attivo del tuo avversario, prima di aver applicato debolezza e resistenza.",
		pt: "Durante este turno, os ataques dos seus Pokémon Golpe Fusão causarão 30 pontos de dano a mais ao Pokémon Ativo do seu oponente (antes de aplicar Fraqueza e Resistência).",
		de: "Während dieses Zuges fügen die Attacken deiner Fusionsangriff-Pokémon dem Aktiven Pokémon deines Gegners 30 Schadenspunkte mehr zu (bevor Schwäche und Resistenz verrechnet werden)."
	},

	trainerType: "Item",
	regulationMark: "E",
	illustrator: "Toyste Beach",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	}
}

export default card