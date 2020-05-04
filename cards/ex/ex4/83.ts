import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-83",
	localId: 83,

	// Card informations
	name: {
		en: "Team Magma Hideout",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ken Ikuji",











	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
