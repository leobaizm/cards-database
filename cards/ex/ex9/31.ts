import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex9-31",
	localId: 31,

	// Card informations
	name: {
		en: "Hariyama",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 297,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex9/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex9/31/high",
		},
	},

	evolveFrom: {
		en: "Makuhita",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Cross-Cut",
		},
		text: {
			en: "If the Defending Pokémon is an Evolved Pokémon, this attack does 20 damage plus 20 more damage.",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shove",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Emerald",
		code: "ex9"
	}
}

export default card
