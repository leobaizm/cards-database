import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy0-21",
	localId: 21,

	// Card informations
	name: {
		en: "Honedge",
		fr: "Monorpale",
	},

	hp: 60,

	type: [
		Type.METAL,
	],

	dexId: 679,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy0/21/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy0/21/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy0/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Continuous Slash",
			fr: "Tranche Sans Fin",
		},
		text: {
			en: "Flip a coin until you get tails. This attack does 30 damage times the number of heads.",
			fr: "Lancez une pièce jusqu'à ce que vous obteniez un côté pile. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Kalos Starter Set",
		code: "xy0"
	}
}

export default card
