import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-111",
	localId: 111,

	// Card informations
	name: {
		en: "Scizor Spirit Link",
		fr: "Lien Spirituel Cizayox",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/111/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/111/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/111/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/111/high",
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
			fr: "Votre tour ne se termine pas si le Pokémon auquel cette carte est attachée devient M-Cizayox-EX.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
