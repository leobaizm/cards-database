import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-40",
	localId: 40,

	// Card informations
	name: {
		en: "Lumineon",
		fr: "Luminéon",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 457,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/40/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/40/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/40/high",
		},
	},

	evolveFrom: {
		en: "Finneon",
		fr: "Écayon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sekio",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Neon Trickery",
			fr: "Supercherie Néon",
		},
		text: {
			en: "You may move an Energy from your opponent's Active Pokémon to 1 of their Benched Pokémon.",
			fr: "Vous pouvez déplacer une Énergie du Pokémon Actif de votre adversaire vers l’un de ses Pokémon de Banc.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
