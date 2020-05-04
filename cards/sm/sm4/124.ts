import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-124",
	localId: 124,

	// Card informations
	name: {
		en: "Water Energy",
		fr: "Énergie Water de base",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/124/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/124/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/124/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/124/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.RARE,

	category: Category.ENERGY,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
