import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base1-42",
	localId: 42,

	// Card informations
	name: {
		en: "Wartortle",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 8,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base1/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base1/42/high",
		},
	},

	evolveFrom: {
		en: "Squirtle",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Withdraw",
		},
		text: {
			en: "Flip a coin. If heads, prevent all damage done to Wartortle during your opponent's next turn. (Any other effects of attacks still happen.)",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bite",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Base",
		code: "base1"
	}
}

export default card
