import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex14-88",
	localId: 88,

	// Card informations
	name: {
		en: "Double Rainbow Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex14/88/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex14/88/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Takumi Akabane",











	rarity: Rarity.RARE,

	category: Category.ENERGY,

	set: {
		name: "Crystal Guardians",
		code: "ex14"
	}
}

export default card
