import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-50",
	localId: 50,

	// Card informations
	name: {
		en: "Inkay",
		fr: "Sepiatop",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 686,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/50/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/50/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/50/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/50/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sowsow",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hypnosis",
			fr: "Hypnose",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
