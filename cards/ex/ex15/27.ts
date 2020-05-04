import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-27",
	localId: 27,

	// Card informations
	name: {
		en: "Croconaw δ",
	},

	hp: 70,

	type: [
		Type.LIGHTNING,
	],

	dexId: 159,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/27/high",
		},
	},

	evolveFrom: {
		en: "Totodile",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scary Face",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon can't attack or retreat during your opponent's next turn.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
