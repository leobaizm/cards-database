import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base5-81",
	localId: 81,

	// Card informations
	name: {
		en: "Full Heal Energy",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],

	illustrator: "Keiji Kinebuchi",











	rarity: Rarity.UNCOMMON,

	category: Category.ENERGY,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
