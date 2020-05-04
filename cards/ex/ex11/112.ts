import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-112",
	localId: 112,

	// Card informations
	name: {
		en: "Kyogre Star",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 382,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Critical Collection",
		},
		text: {
			en: "Count the number of Prize cards your opponent has taken. Search your discard pile for up to that many Water Energy cards and attach them to Kyogre Star.",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sheer Cold",
		},
		text: {
			en: "Flip a coin. If heads, each Defending Pokémon can't attack during your opponent's next turn.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
