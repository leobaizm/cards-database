import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-80",
	localId: 80,

	// Card informations
	name: {
		en: "Mudkip",
		fr: "Gobou",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 258,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/80/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/80/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/80/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/80/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Emi Yoshida",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Mud Spatter",
			fr: "Éclaboussure de boue",
		},
		damage: 10
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Endeavor",
			fr: "Effort",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage plus 20 more damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires pour chaque face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Great Encounters",
		code: "dp4"
	}
}

export default card
