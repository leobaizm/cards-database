import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-11",
	localId: 11,

	// Card informations
	name: {
		en: "Grookey",
		fr: "Ouistempo",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/11/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/11/low",
		}
	},

	evolveTo: [{
		en: "Thwackey",
		fr: "Badabouin",
	}],

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Beat",
			fr: "Bataille",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
