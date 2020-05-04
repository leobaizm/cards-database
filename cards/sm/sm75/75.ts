import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-75",
	localId: 75,

	// Card informations
	name: {
		en: "Dragon Talon",
		fr: "Serre de Dragon",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/75/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/75/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/75/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/75/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Toyste Beach",



	attacks: [{
		name: {},
		text: {
			fr: "Si le Pokémon Dragon auquel cette carte est attachée est votre Pokémon Actif et qu’il subit les dégâts d’une attaque de votre adversaire (même si le Pokémon est mis K.O.), placez 3 marqueurs de dégâts sur le Pokémon Attaquant.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
