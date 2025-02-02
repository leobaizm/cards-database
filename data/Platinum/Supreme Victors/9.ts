import { Card } from '../../../interfaces'
import Set from '../Supreme Victors'

const card: Card = {
	name: {
		en: "Regigigas FB",
		fr: "Regigigas ",
		de: "Regigigas FB"
	},
	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		486,
	],
	hp: 100,
	types: [
		"Colorless",
	],

	stage: "Basic",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Drain Punch",
				fr: "Vampipoing",
				de: "Ableithieb"
			},
			effect: {
				en: "Remove from Regigigas FB a number of damage counters equal to the amount of Energy attached to the Defending Pokémon.",
				fr: "Retirez à Regigigas  autant de marqueurs de dégât qu'il y a d'Énergie(s) attachée(s) au Pokémon Défenseur.",
				de: "Entferne eine Anzahl Schadensmarken von Regigigas FB, die der Anzahl der am Verteidigenden Pokémon angelegten Energien entspricht."
			},
			damage: 30,

		},
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Rainbow Lariat",
				fr: "Lasso arc-en-ciel",
				de: "Regenbogenlasso"
			},
			effect: {
				en: "Does 20 damage times the number of different types of Pokémon SP you have in play.",
				fr: "Inflige 20 dégâts multipliés par le nombre de types de Pokémon SP différents que vous avez en jeu.",
				de: "Dieser Angriff fügt 20 Schadenspunkte mal der Anzahl verschiedener Typen deiner Pokémon SP im Spiel zu."
			},
			damage: "20x",

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 4,



}

export default card
