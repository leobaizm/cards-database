import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex6-28",
	localId: 28,

	// Card informations
	name: {
		en: "Primeape",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 57,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex6/28/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex6/28/high",
		},
	},

	evolveFrom: {
		en: "Mankey",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Toss",
		},
		text: {
			en: "You may discard from your hand as many Technical Machine and Pokémon Tool cards as you like. This attack does 30 damage times the number of cards you discarded.",
		},
		damage: 30
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Low Kick",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "FireRed & LeafGreen",
		code: "ex6"
	}
}

export default card
