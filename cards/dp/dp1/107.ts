import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-107",
	localId: 107,

	// Card informations
	name: {
		en: "Energy Switch",
		fr: "Échange d'énergie",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/107/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/107/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.ITEM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Déplacez 1 carte Énergie de base attachée à 1 de vos Pokémon sur un autre de vos Pokémon.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
