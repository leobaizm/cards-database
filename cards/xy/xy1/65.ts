import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-65",
	localId: 65,

	// Card informations
	name: {
		en: "Timburr",
		fr: "Charpenti",
	},

	hp: 70,

	type: [
		Type.FIGHTING,
	],

	dexId: 532,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/65/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/65/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/65/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Pummel",
			fr: "Martelage",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
