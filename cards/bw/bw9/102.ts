import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw9-102",
	localId: 102,

	// Card informations
	name: {
		en: "Shadow Triad",
		fr: "Trio des Ombres",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw9/102/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw9/102/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw9/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Yusuke Ohmura",



	attacks: [{
		name: {},
		text: {
			fr: "Ajoutez une carte de la Team Plasma de votre pile de défausse à votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Plasma Freeze",
		code: "bw9"
	}
}

export default card
