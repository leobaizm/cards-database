import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp4-61",
	localId: 61,

	// Card informations
	name: {
		en: "Buizel",
		fr: "Mustébouée",
	},

	hp: 60,

	type: [
		Type.WATER,
	],

	dexId: 418,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp4/61/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp4/61/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp4/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		name: {
			en: "Headbutt",
			fr: "Coup d'boule",
		},
		damage: 10
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
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
