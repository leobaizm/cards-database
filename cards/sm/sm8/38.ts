import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-38",
	localId: 38,

	// Card informations
	name: {
		en: "Moltres",
		fr: "Sulfura",
	},

	hp: 120,

	type: [
		Type.FIRE,
	],

	dexId: 146,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/38/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/38/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/38/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Misa Tsutsui",



	attacks: [{
		cost: [
			Type.FIRE
		],
		name: {
			en: "Assisting Heater",
			fr: "Assistant Thermique",
		},
		text: {
			en: "You may attach a Fire Energy card from your hand to 1 of your Benched Pokémon.",
			fr: "Vous pouvez attacher une carte Énergie Fire de votre main à l’un de vos Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Fire Wing",
			fr: "Aile de Feu",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
