import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-235",
	localId: 235,

	// Card informations
	name: {
		en: "Spell Tag",
		fr: "Rune Sort",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/235/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/235/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/235/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/235/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Ayaka Yoshida",



	attacks: [{
		name: {},
		text: {
			fr: "Lorsque le Pokémon Psychic auquel cette carte est attachée est mis K.O. par les dégâts d’une attaque de votre adversaire, placez 4 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
