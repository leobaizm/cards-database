import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-41",
	localId: 41,

	// Card informations
	name: {
		en: "Tentacruel",
		fr: "Tentacruel",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 73,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/41/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/41/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/41/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/41/high",
		},
	},

	evolveFrom: {
		en: "Tentacool",
		fr: "Tentacool",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shigenori Negishi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Wicked Tentacles",
			fr: "Tentacules Malins",
		},
		text: {
			en: "Move an Energy from 1 of your opponent's Pokémon to another of their Pokémon. If you do, put 3 damage counters on the Pokémon you moved the Energy to.",
			fr: "Déplacez une Énergie de l’un des Pokémon de votre adversaire vers un autre de ses Pokémon. Dans ce cas, placez 3 marqueurs de dégâts sur le Pokémon auquel vous avez attaché l’Énergie.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Wrap",
			fr: "Ligotage",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
