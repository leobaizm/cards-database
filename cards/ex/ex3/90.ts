import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex3-90",
	localId: 90,

	// Card informations
	name: {
		en: "Dragonite ex",
	},

	hp: 150,

	type: [
		Type.COLORLESS,
	],

	dexId: 149,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex3/90/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex3/90/high",
		},
	},

	evolveFrom: {
		en: "Dragonair",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 863,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Call for Power",
		},
		text: {
			en: "As often as you like during your turn, you may move an Energy card attached to 1 of your Pokémon to Dragonite ex. This power can't be used if Dragonite ex is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.LIGHTNING
		],
		name: {
			en: "Dragon Wave",
		},
		text: {
			en: "Discard a Water Energy card and a Lightning Energy card attached to Dragonite ex.",
		},
		damage: 70
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giant Tail",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
		},
		damage: 120
	}],

	weaknesses: [{
		type: Type.COLORLESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.GRASS,
		value: "-30"
	},{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon",
		code: "ex3"
	}
}

export default card
