import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-44",
	localId: 44,

	// Card informations
	name: {
		en: "Zapdos",
	},

	hp: 80,

	type: [
		Type.LIGHTNING,
	],

	dexId: 145,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/44/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/44/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hajime Kusajima",

	abilities: [{
		id: 1082,
		type: AbilityType.POKEBODY,
		name: {
			en: "Anti",
		},
		text: {
			en: "Lightning - You can't attach Lightning Energy cards from your hand to Zapdos.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Plasma",
		},
		text: {
			en: "If there are any Energy cards in your discard pile, flip a coin. If heads attach 1 of those Energy cards to Zapdos.",
		},
		damage: 10
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Lightning Storm",
		},
		text: {
			en: "Flip a coin. If tails, put 2 damage counters on Zapdos.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
