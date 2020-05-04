import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV35",
	localId: "SV35",

	// Card informations
	name: {
		en: "Kirlia",
		fr: "Kirlia",
	},

	hp: 80,

	type: [
		Type.FAIRY,
	],

	dexId: 281,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV35/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV35/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV35/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV35/high",
		},
	},

	evolveFrom: {
		en: "Ralts",
		fr: "Tarsal",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sumiyoshi Kizuki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Smack",
			fr: "Claque",
		},
		damage: 20
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
