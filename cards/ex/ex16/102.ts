import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-102",
	localId: 102,

	// Card informations
	name: {
		en: "Vaporeon Star",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 134,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",

	abilities: [{
		id: 996,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Blue Ray",
		},
		text: {
			en: "Once during your turn, when you put Vaporeon Star from your hand onto your Bench, you may remove all Special Conditions and 3 damage counters from each Active Pokémon (both yours and your opponent's).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Whirlpool",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy card attached to the Defending Pokémon.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
