import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-171",
	localId: 171,

	// Card informations
	name: {
		en: "Unit Energy LightningPsychicMetal",
		fr: "Énergie Unitaire LightningPsychicMetal",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/171/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/171/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/171/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/171/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SPECIAL,
	],





	attacks: [{
		name: {},
		text: {
			fr: "Cette carte fournit de l’Énergie Colorless. \n\nLorsque cette carte est attachée à un Pokémon, elle fournit de l’Énergie Lightning, Psychic ou Metal mais ne fournit qu’une Énergie à la fois.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.ENERGY,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
