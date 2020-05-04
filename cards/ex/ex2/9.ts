import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex2-9",
	localId: 9,

	// Card informations
	name: {
		en: "Mawile",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 303,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex2/9/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex2/9/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scam",
		},
		text: {
			en: "Look at your opponent's hand. You may have your opponent shuffle a Supporter card you find there into his or her deck. If you do, your opponent draws a card.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Metal Hook",
		},
		text: {
			en: "Before doing damage, you may switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. If you do, this attack does 20 damage to the new Defending Pokémon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sandstorm",
		code: "ex2"
	}
}

export default card
