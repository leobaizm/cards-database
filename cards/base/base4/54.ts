import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "base4-54",
	localId: 54,

	// Card informations
	name: {
		en: "Nidorino",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 33,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/base/base4/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/base/base4/54/high",
		},
	},

	evolveFrom: {
		en: "Nidoran♂",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Kick",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage times the number of heads.",
		},
		damage: 30
	},{
		cost: [
			Type.GRASS,
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Horn Drill",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Base Set 2",
		code: "base4"
	}
}

export default card
