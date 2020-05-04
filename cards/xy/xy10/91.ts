import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy10-91",
	localId: 91,

	// Card informations
	name: {
		en: "Altaria Spirit Link",
		fr: "Lien Spirituel Altaria",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy10/91/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy10/91/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy10/91/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Altaria-EX.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Fates Collide",
		code: "xy10"
	}
}

export default card
