import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-18",
	localId: 18,

	// Card informations
	name: {
		en: "Chimchar",
		fr: "Ouisticram",
	},

	hp: 60,

	type: [
		Type.FIRE,
	],

	dexId: 390,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/18/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/18/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/18/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/18/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Shibuzoh.",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scratch",
			fr: "Griffe",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Ember",
			fr: "Flammèche",
		},
		text: {
			en: "Flip a coin. If tails, discard a Fire Energy attached to this Pokémon.",
			fr: "Lancez une pièce. Si c’est pile, défaussez une Énergie Fire attachée à ce Pokémon.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
