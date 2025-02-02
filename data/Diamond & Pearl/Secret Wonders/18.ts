import { Card } from '../../../interfaces'
import Set from '../Secret Wonders'

const card: Card = {
	name: {
		en: "Salamence",
		fr: "Drattak",
		de: "Brutalanda"
	},
	illustrator: "Kazuyuki Kano",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		373,
	],
	hp: 140,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Shelgon",
		fr: "Drackhaus",
	},
	stage: "Stage2",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Direct Hit",
				fr: "Coup direct",
				de: "Volltreffer"
			},
			effect: {
				en: "This attack's damage isn't affected by Weakness, Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
				fr: "Les dégâts de cette attaque ne sont pas affectés par la Faiblesse, la Résistance, les Poké-Powers, les Poké-Bodies ou tout autre effet sur le Pokémon Défenseur.",
				de: "Schwäche, Resistenz, Poké-Power, Poké-Body und alle anderen Effekte auf dem Verteidigenden Pokémon haben keine Auswirkungen auf die Schadenspunkte dieses Angriffs."
			},
			damage: 50,

		},
		{
			cost: [
				"Fire",
				"Fire",
				"Water",
				"Water",
			],
			name: {
				en: "Dragon Finish",
				fr: "Finition de dragon",
				de: "Drachenfinale"
			},
			effect: {
				en: "Discard 2 basic Fire Energy cards or 2 basic Water Energy cards attached to Salamence. If you discarded 2 basic Fire Energy cards, this attack does 100 damage to the Defending Pokémon. If you discarded 2 basic Water Energy cards, this attack does 100 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (If you can't discard cards, this attack does nothing.)",
				fr: "Défaussez 2 cartes Énergie de base Fire ou 2 cartes Énergie de base Water  attachées à Drattak. Si vous avez défaussé 2 cartes Énergie de base Fire, cette attaque inflige 100 dégâts au Pokémon Défenseur. Si vous avez défaussé 2 cartes Énergie de base Water, cette attaque inflige 100 dégâts à 1 des Pokémon de Banc de votre adversaire. (Vous ne pouvez pas appliquer la Faiblesse ou la Résistance aux Pokémon de Banc.) (Si vous ne pouvez pas défausser de cartes, cette attaque est sans effet.)",
				de: "Lege 2 an Brutalanda angelegte - oder -Basis-Energiekarten auf deinen Ablagestapel. Wenn du 2 -Basis-Energiekarten auf deinen Ablagestapel gelegt hast, fügt dieser Angriff dem Verteidigenden Pokémon 100 Schadenspunkte zu. Wenn du 2 -Basis-Energiekarten auf deinen Ablagestapel gelegt hast, fügt dieser Angriff 1 Pokémon auf der Bank deines Gegners 100 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.) (Wenn du keine Karten auf deinen Ablagestapel legen kannst, hat dieser Angriff keine Auswirkungen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Colorless",
			value: "+30"
		},
	],
	resistances: [
		{
			type: "Fighting",
			value: "-20"
		},
	],
	retreat: 3,



}

export default card
