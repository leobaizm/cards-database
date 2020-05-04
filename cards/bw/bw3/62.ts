import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw3-62",
	localId: 62,

	// Card informations
	name: {
		en: "Timburr",
		fr: "Charpenti",
	},

	hp: 60,

	type: [
		Type.FIGHTING,
	],

	dexId: 532,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw3/62/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw3/62/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw3/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Tomokazu Komiya",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Pummel",
			fr: "Martelage",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 10 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 10 dégâts supplémentaires.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Noble Victories",
		code: "bw3"
	}
}

export default card
