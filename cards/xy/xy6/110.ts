import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-110",
	localId: 110,

	// Card informations
	name: {
		en: "VS Seeker",
		fr: "Cherche VS",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/110/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/110/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/110/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez une carte Supporter de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
