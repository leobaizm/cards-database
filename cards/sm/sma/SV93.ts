import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sma-SV93",
	localId: "SV93",

	// Card informations
	name: {
		en: "Tapu Koko-GX",
		fr: "Tokorico-GX",
	},

	hp: 170,

	type: [
		Type.LIGHTNING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV93/low",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV93/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sma/SV93/high",
			fr: "https://assets.tcgdex.net/fr/sm/sma/SV93/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1203,
		type: AbilityType.TALENT,
		name: {
			en: "Aero Trail",
			fr: "Sentier Aérien",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench during your turn, you may move any number of Lightning Energy from your other Pokémon to this Pokémon. If you do, switch this Pokémon with your Active Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc pendant votre tour, vous pouvez déplacer autant d’Énergie Lightning que vous voulez de vos autres Pokémon vers ce Pokémon. Dans ce cas, échangez ce Pokémon avec votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Sky-High Claws",
			fr: "Griffes Gratte-Ciel",
		},
		damage: 130
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Tapu Thunder-GX",
			fr: "Toko Tonnerre-GX",
		},
		text: {
			en: "This attack does 50 damage times the amount of Energy attached to all of your opponent's Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Cette attaque inflige 50 dégâts multipliés par le nombre d’Énergies attachées aux Pokémon de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 50
	}],





	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Shiny Vault",
		code: "sma"
	}
}

export default card
