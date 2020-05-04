import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-86",
	localId: 86,

	// Card informations
	name: {
		en: "Low Pressure System",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/86/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Shin-ichi Yoshikawa",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
