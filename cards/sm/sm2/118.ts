import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-118",
	localId: 118,

	// Card informations
	name: {
		en: "Altar of the Sunne",
		fr: "Autel du Soleil",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/118/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/118/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/118/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/118/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.STADIUM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		name: {},
		text: {
			fr: "Les Pokémon Fire et les Pokémon Metal (les vôtres et ceux de votre adversaire) n’ont pas de Faiblesse.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
