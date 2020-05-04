import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy8-8",
	localId: 8,

	// Card informations
	name: {
		en: "Chespin",
		fr: "Marisson",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 650,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy8/8/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy8/8/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy8/8/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Work",
			fr: "Travail",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Seed Bomb",
			fr: "Canon Graine",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKthrough",
		code: "xy8"
	}
}

export default card
