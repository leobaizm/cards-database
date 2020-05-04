import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-91",
	localId: 91,

	// Card informations
	name: {
		en: "AZ",
		fr: "A.Z.",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/91/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/91/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/91/high",
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
			fr: "Placez l'un de vos Pokémon dans votre main. (Défaussez toutes les cartes attachées au Pokémon.)",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
