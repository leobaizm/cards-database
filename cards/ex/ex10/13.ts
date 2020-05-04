import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-13",
	localId: 13,

	// Card informations
	name: {
		en: "Slowbro",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 80,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/13/high",
		},
	},

	evolveFrom: {
		en: "Slowpoke",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 230,
		type: AbilityType.POKEBODY,
		name: {
			en: "Dual Armor",
		},
		text: {
			en: "As long as Slowbro has any Psychic Energy attached to it, Slowbro is both Water and Psychic type.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Parallel Gain",
		},
		text: {
			en: "Remove 1 damage counter from each of your Pokémon (including Slowbro).",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Rolling Tackle",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
