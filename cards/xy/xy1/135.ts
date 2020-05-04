import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-135",
	localId: 135,

	// Card informations
	name: {
		en: "Lightning Energy",
		fr: "Énergie Électrique",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/135/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/135/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/135/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/135/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASICENERGY,
		Tag.BASIC,
	],













	rarity: Rarity.COMMON,

	category: Category.ENERGY,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
