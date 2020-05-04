import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-39",
	localId: 39,

	// Card informations
	name: {
		en: "Granbull",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 210,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/39/high",
		},
	},

	evolveFrom: {
		en: "Snubbull",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 111,
		type: AbilityType.POKEBODY,
		name: {
			en: "Intimidating Fang",
		},
		text: {
			en: "As long as Granbull is your Active Pokémon, any damage done to your Pokémon by an opponent's attack is reduced by 10 (before applying Weakness and Resistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Crushing Blow",
		},
		text: {
			en: "Flip a coin. If heads, discard an Energy attached to the Defending Pokémon.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Double Lariat",
		},
		text: {
			en: "Flip 2 coins. This attack does 50 damage times the number of heads.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
