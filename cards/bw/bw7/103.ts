import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw7-103",
	localId: 103,

	// Card informations
	name: {
		en: "White Kyurem-EX",
		fr: "Kyurem Blanc-EX",
	},

	hp: 180,

	type: [
		Type.DRAGON,
	],

	dexId: 646,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw7/103/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/103/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw7/103/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw7/103/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Eske Yoshinob",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dragon Stream",
			fr: "Flux Draconique",
		},
		text: {
			en: "Flip a coin. If heads, attach a basic Energy card from your discard pile to this Pokémon.",
			fr: "Lancez une pièce. Si c'est face, attachez une carte Énergie de base de votre pile de défausse à ce Pokémon.",
		},
		damage: 60
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ice Burn",
			fr: "Feu Glacé",
		},
		text: {
			en: "Discard 2 Fire Energy attached to this Pokémon. The Defending Pokémon is now Burned.",
			fr: "Défaussez 2 Énergies Fire attachées à ce Pokémon. Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 150
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Boundaries Crossed",
		code: "bw7"
	}
}

export default card
