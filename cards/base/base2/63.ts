import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base2-63",
	localId: 63,

	// Card informations
	name: {
		en: "Venonat",
	},

	hp: 40,

	type: [
		Type.GRASS,
	],

	dexId: 48,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base2/63/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base2/63/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Stun Spore",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Leech Life",
		},
		text: {
			en: "Remove a number of damage counters from Venonat equal to the damage done to the Defending Pokémon (after applying Weakness and Resistance).",
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
		name: "Jungle",
		code: "base2"
	}
}

export default card
