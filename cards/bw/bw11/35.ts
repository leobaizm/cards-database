import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw11-35",
	localId: 35,

	// Card informations
	name: {
		en: "Empoleon",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 395,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw11/35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw11/35/high",
		},
	},

	evolveFrom: {
		en: "Prinplup",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Surf",
		},
		damage: 50
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Emperor's Strike",
		},
		text: {
			en: "If this Pokémon has fewer remaining HP than the Defending Pokémon, this attack does 60 more damage.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legendary Treasures",
		code: "bw11"
	}
}

export default card
