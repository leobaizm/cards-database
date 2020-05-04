import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-121",
	localId: 121,

	// Card informations
	name: {
		en: "Ilima",
		fr: "Althéo",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/121/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/121/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/121/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/121/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Chaque joueur mélange sa main avec son deck et lance une pièce. Si c'est face, ce joueur pioche 6 cartes. Si c'est pile, il pioche 3 cartes.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
