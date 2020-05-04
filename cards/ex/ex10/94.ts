import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-94",
	localId: 94,

	// Card informations
	name: {
		en: "Energy Search",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Kai Ishikawa",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
