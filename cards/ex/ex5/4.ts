import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex5-4",
	localId: 4,

	// Card informations
	name: {
		en: "Dark Celebi",
	},

	hp: 70,

	type: [
		Type.GRASS,
		Type.DARKNESS,
	],

	dexId: 251,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex5/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex5/4/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Ikuji",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Dark Provide",
		},
		text: {
			en: "Attach up to 1 Grass or Darkness Energy card from your hand to your Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.DARKNESS
		],
		name: {
			en: "Leaf Poison",
		},
		text: {
			en: "The Defending Pokémon is now Poisoned.",
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
		name: "Hidden Legends",
		code: "ex5"
	}
}

export default card
