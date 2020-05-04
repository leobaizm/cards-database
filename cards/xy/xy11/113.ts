import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-113",
	localId: 113,

	// Card informations
	name: {
		en: "Pokémon Ranger",
		fr: "Pokémon Ranger",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/113/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/113/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {},
		text: {
			fr: "Supprimez tous les effets des attaques sur chaque joueur et ses Pokémon.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
