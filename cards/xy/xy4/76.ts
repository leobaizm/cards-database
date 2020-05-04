import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-76",
	localId: 76,

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
			en: "https://assets.tcgdex.net/en/xy/xy4/76/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/76/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/76/high",
		},
	},

	evolveFrom: {
		en: "Goomy",
		fr: "Mucuscule",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Gooey",
			fr: "Poisseux",
		},
		text: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts à ce Pokémon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
