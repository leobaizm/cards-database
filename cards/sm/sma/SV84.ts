import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV84",
	localId: "SV84",

	// Card informations
	name: {
		en: "Guzma",
		fr: "Guzma",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV84/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV84/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV84/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV84/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		name: {},
		text: {
			fr: "Échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif. Dans ce cas, échangez votre Pokémon Actif avec l’un de vos Pokémon de Banc.",
		},
	}],







	rarity: Rarity.COMMON,

	category: Category.TRAINER,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
