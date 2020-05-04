import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY177",
	localId: "XY177",

	// Card informations
	name: {
		en: "Karen",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY177/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY177/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "You Iribi",











	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
