import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-270",
	localId: 270,

	// Card informations
	name: {
		en: "Tag Call",
		fr: "Appel aux Escouades",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/270/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/270/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/270/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/270/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez jusqu’à 2 cartes ESCOUADE dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
