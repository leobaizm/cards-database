import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-102",
	localId: 102,

	// Card informations
	name: {
		en: "Lickitung",
		fr: "Excelangue",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 108,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/102/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/102/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/102/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/102/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lap Up",
			fr: "Gobeur",
		},
		text: {
			en: "Draw 3 cards.",
			fr: "Piochez 3 cartes.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Slam",
			fr: "Souplesse",
		},
		text: {
			en: "Flip 2 coins. This attack does 50 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 50 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
