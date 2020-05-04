import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex12-79",
	localId: 79,

	// Card informations
	name: {
		en: "Mysterious Fossil",
	},

	hp: 50,





	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex12/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex12/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Legend Maker",
		code: "ex12"
	}
}

export default card
