import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex15-12",
	localId: 12,

	// Card informations
	name: {
		en: "Typhlosion δ",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 157,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex15/12/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex15/12/high",
		},
	},

	evolveFrom: {
		en: "Quilava",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hisao Nakamura",

	abilities: [{
		id: 74,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Shady Move",
		},
		text: {
			en: "Once during your turn (before your attack), if Typhlosion is your Active Pokémon, you may move 1 damage counter from either player's Pokémon to another Pokémon (yours or your opponent's). This power can't be used if Typhlosion is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Burning Ball",
		},
		text: {
			en: "If Typhlosion has at least 2 Fire Energy attached to it, the Defending Pokémon is now Burned.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragon Frontiers",
		code: "ex15"
	}
}

export default card
