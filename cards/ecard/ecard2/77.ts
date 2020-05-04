import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-77",
	localId: 77,

	// Card informations
	name: {
		en: "Exeggcute",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 102,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/77/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/77/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Continuous Eggsplosion",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 10 damage times the number of heads.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Energy Support",
		},
		text: {
			en: "Flip a coin. If heads, search your deck for a Energy card and attach it to one of your Benched Pokémon. Shuffle your deck afterward.",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
