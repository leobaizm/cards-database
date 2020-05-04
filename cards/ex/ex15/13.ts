import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-13",
	localId: 13,

	// Card informations
	name: {
		en: "Arbok δ",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 24,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/13/high",
		},
	},

	evolveFrom: {
		en: "Ekans",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hisao Nakamura",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Burning Venom",
		},
		text: {
			en: "The Defending Pokémon is now Burned and Poisoned.",
		},
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Strangle",
		},
		text: {
			en: "If the Defending Pokémon has δ on its card, this attack does 50 damage plus 30 more damage.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
