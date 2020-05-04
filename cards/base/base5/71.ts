import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base5-71",
	localId: 71,

	// Card informations
	name: {
		en: "Here Comes Team Rocket!",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base5/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base5/71/high",
		},
	},

	evolveFrom: {},

	tags: [],

	illustrator: "Ken Sugimori",











	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Team Rocket",
		code: "base5"
	}
}

export default card
