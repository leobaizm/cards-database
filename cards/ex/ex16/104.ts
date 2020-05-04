import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-104",
	localId: 104,

	// Card informations
	name: {
		en: "Fire Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/104/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],













	rarity: Rarity.RARE,

	category: Category.ENERGY,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
