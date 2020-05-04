import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-11",
	localId: 11,

	// Card informations
	name: {
		en: "Machamp",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/11/high",
		},
	},

	evolveFrom: {
		en: "Machoke",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Ken Sugimori",

	abilities: [{
		id: 978,
		type: AbilityType.POKEBODY,
		name: {
			en: "Overzealous",
		},
		text: {
			en: "If your opponent has any Pokémon-ex in play, each of Machamp's attacks does 30 more damage to the Defending Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Brick Smash",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance, Poké-Powers, Poké-Bodies, or any other effects on the Defending Pokémon.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Cross Chop",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 60 damage plus 30 more damage.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
