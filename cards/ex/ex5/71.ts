import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-71",
	localId: 71,

	// Card informations
	name: {
		en: "Seedot",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 273,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/71/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hisao Nakamura",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Growth Spurt",
		},
		text: {
			en: "Attach a Grass Energy card from your hand to Seedot.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Trip Over",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 damage plus 10 more damage.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
