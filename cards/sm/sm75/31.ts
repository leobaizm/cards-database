import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm75-31",
	localId: 31,

	// Card informations
	name: {
		en: "Wishiwashi",
		fr: "Froussardine",
	},

	hp: 30,

	type: [
		Type.WATER,
	],

	dexId: 746,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm75/31/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm75/31/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm75/31/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 1194,
		type: AbilityType.TALENT,
		name: {
			en: "Meet Up",
			fr: "Assemblée",
		},
		text: {
			en: "Your Wishiwashi-GX in play get +20 HP, and their attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Vos Froussardine-GX en jeu reçoivent +20 PV et leurs attaques infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Water Gun",
			fr: "Pistolet à O",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Dragon Majesty",
		code: "sm75"
	}
}

export default card
