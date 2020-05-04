import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-93",
	localId: 93,

	// Card informations
	name: {
		en: "Sliggoo",
		fr: "Colimucus",
	},

	hp: 80,

	type: [
		Type.DRAGON,
	],

	dexId: 705,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/93/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/93/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/93/high",
		},
	},

	evolveFrom: {
		en: "Goomy",
		fr: "Mucuscule",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Absorb",
			fr: "Vol-Vie",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Hammer In",
			fr: "Enfoncement",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
