import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base3-40",
	localId: 40,

	// Card informations
	name: {
		en: "Omastar",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 139,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base3/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base3/40/high",
		},
	},

	evolveFrom: {
		en: "Omanyte",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Water Gun",
		},
		text: {
			en: "Does 20 damage plus 10 more damage for each Energy attached to Omastar but not used to pay for this attack's Energy cost. You can't add more than 20 damage in this way.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Spike Cannon",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Fossil",
		code: "base3"
	}
}

export default card
