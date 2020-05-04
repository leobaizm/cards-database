import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-42",
	localId: 42,

	// Card informations
	name: {
		en: "Lileep",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 345,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/42/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/42/high",
		},
	},

	evolveFrom: {
		en: "Root Fossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Influence",
		},
		text: {
			en: "Search your deck for Omanyte, Kabuto, Aerodactyl, Lileep, or Anorith and put up to 2 of them onto your Bench. Shuffle your deck afterward. Treat the new Benched Pokémon as Basic Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Time Spiral",
		},
		text: {
			en: "If your opponent has any Evolved Pokémon in play, choose 1 of them and flip a coin. If heads, take the highest Stage Evolution card on that Pokémon and have your opponent shuffle it into his or her deck.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
