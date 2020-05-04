import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base4-120",
	localId: 120,

	// Card informations
	name: {
		en: "Gust of Wind",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/120/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/120/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
