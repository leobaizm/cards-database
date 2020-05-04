import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-144",
	localId: 144,

	// Card informations
	name: {
		en: "Sky Pillar",
		fr: "Pilier Céleste",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/144/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/144/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/144/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/144/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		name: {},
		text: {
			fr: "Évitez tous les effets des attaques de votre adversaire, y compris les dégâts, infligés aux Pokémon de Banc (les vôtres et ceux de votre adversaire).",
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
