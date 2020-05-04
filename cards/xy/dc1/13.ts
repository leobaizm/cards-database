import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dc1-13",
	localId: 13,

	// Card informations
	name: {
		en: "Team Magma's Lairon",
		fr: "Galegon de la Team Magma",
	},

	hp: 90,

	type: [
		Type.FIGHTING,
	],

	dexId: 305,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/dc1/13/low",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/dc1/13/high",
			fr: "https://assets.tcgdex.net/fr/xy/dc1/13/high",
		},
	},

	evolveFrom: {
		en: "Team Magma's Aron",
		fr: "Galekid de la Team Magma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Gnaw",
			fr: "Ronge",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Take Down",
			fr: "Bélier",
		},
		text: {
			en: "This Pokémon does 10 damage to itself.",
			fr: "Ce Pokémon s'inflige 10 dégâts.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Double Crisis",
		code: "dc1"
	}
}

export default card
