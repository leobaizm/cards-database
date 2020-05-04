import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-61",
	localId: 61,

	// Card informations
	name: {
		en: "Cosmoem",
		fr: "Cosmovum",
	},

	hp: 90,

	type: [
		Type.PSYCHIC,
	],

	dexId: 790,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/61/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/61/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/61/high",
		},
	},

	evolveFrom: {
		en: "Cosmog",
		fr: "Cosmog",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Teleport",
			fr: "Téléport",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
