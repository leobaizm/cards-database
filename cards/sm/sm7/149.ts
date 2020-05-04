import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-149",
	localId: 149,

	// Card informations
	name: {
		en: "TV Reporter",
		fr: "Journaliste Télé",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/149/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/149/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/149/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/149/high",
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
			fr: "Piochez 3 cartes. Ensuite, défaussez une carte de votre main. Si votre deck ne contient aucune carte, vous ne pouvez pas jouer cette carte.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
