import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-72",
	localId: 72,

	// Card informations
	name: {
		en: "Drake's Stadium",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/72/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/72/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
