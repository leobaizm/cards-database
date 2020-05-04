import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-196",
	localId: 196,

	// Card informations
	name: {
		en: "Lillie's Full Force",
		fr: "Pleine Puissance de Lilie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/196/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/196/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/196/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/196/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "kodama",



	attacks: [{
		name: {},
		text: {
			fr: "Piochez 4 cartes.\n\nÀ la fin de ce tour, si vous avez 3 cartes ou plus dans votre main, mélangez des cartes de votre main avec votre deck jusqu’à avoir 2 cartes dans votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
