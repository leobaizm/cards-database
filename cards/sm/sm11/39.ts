import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-39",
	localId: 39,

	// Card informations
	name: {
		en: "Finneon",
		fr: "Écayon",
	},

	hp: 50,

	type: [
		Type.WATER,
	],

	dexId: 456,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/39/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/39/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gust",
			fr: "Tornade",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
