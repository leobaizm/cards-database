import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-208",
	localId: 208,

	// Card informations
	name: {
		en: "Stadium Nav",
		fr: "Navigateur de Stade",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/208/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/208/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/208/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/208/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Yoshinobu Saito",



	attacks: [{
		name: {},
		text: {
			fr: "Lancez 2 pièces. Pour chaque côté face, cherchez une carte Stade dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
