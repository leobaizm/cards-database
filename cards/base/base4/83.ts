import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base4-83",
	localId: 83,

	// Card informations
	name: {
		en: "Nidoran♂",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 32,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/83/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/83/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Horn Hazard",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
