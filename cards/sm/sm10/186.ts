import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-186",
	localId: 186,

	// Card informations
	name: {
		en: "Stealthy Hood",
		fr: "Capuche Furtive",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/186/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/186/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/186/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/186/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TOOL,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Évitez tous les effets des talents de votre adversaire infligés au Pokémon auquel cette carte est attachée. Retirez tous les effets déjà en action.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
