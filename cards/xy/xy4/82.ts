import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy4-82",
	localId: 82,

	// Card informations
	name: {
		en: "Girafarig",
		fr: "Girafarig",
	},

	hp: 90,

	type: [
		Type.COLORLESS,
	],

	dexId: 203,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy4/82/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/82/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy4/82/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy4/82/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psybite",
			fr: "Morsure Psy",
		},
		text: {
			en: "If this Pokémon has any Psychic Energy attached to it, this attack does 30 more damage.",
			fr: "Si de l'Énergie Psychic est attachée à ce Pokémon, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Phantom Forces",
		code: "xy4"
	}
}

export default card
