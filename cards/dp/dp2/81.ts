import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-81",
	localId: 81,

	// Card informations
	name: {
		en: "Electrike",
	},

	hp: 60,

	type: [
		Type.LIGHTNING,
	],

	dexId: 309,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/81/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/81/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Electromagnetic Jam",
		},
		text: {
			en: "Flip a coin. If heads, your opponent can't attach any Energy cards from his or her hand to the Active Pokémon during his or her next turn.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],



	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
