import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-8",
	localId: 8,

	// Card informations
	name: {
		en: "Volbeat",
		fr: "Muciole",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 313,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/8/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/8/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kanako Eo",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Luring Glow",
			fr: "Lueur Attrayante",
		},
		text: {
			en: "Switch 1 of your opponent's Benched Pokémon with your opponent's Active Pokémon.",
			fr: "Échangez l'un des Pokémon de Banc de votre adversaire avec le Pokémon Actif de votre adversaire.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Signal Beam",
			fr: "Rayon Signal",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
