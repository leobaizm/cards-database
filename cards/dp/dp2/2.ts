import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-2",
	localId: 2,

	// Card informations
	name: {
		en: "Alakazam",
	},

	hp: 100,

	type: [
		Type.PSYCHIC,
	],

	dexId: 65,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/2/high",
		},
	},

	evolveFrom: {
		en: "Kadabra",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 507,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Power Cancel",
		},
		text: {
			en: "Once during your opponent's turn, when your opponent's Pokémon uses any Poké-Power, you may discard 2 cards from your hand and prevent all effects of that Poké-Power. (This counts as that Pokémon using its Poké-Power.) This power can't be used if Alakazam is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Psychic Guard",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Alakazam by attacks from your opponent's Stage 2 Evolved Pokémon is reduced by 30 (after applying Weakness and Resistance).",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+30"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
