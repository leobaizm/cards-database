import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex4-92",
	localId: 92,

	// Card informations
	name: {
		en: "Raikou ex",
	},

	hp: 100,

	type: [
		Type.LIGHTNING,
	],

	dexId: 243,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex4/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex4/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Dazzle Blast",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Confused.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Tackle",
		},
		text: {
			en: "Flip a coin. If tails, Raikou ex does 20 damage to itself.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Magma vs Team Aqua",
		code: "ex4"
	}
}

export default card
