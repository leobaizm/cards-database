import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-113",
	localId: 113,

	// Card informations
	name: {
		en: "Hitmontop",
		fr: "Kapoera",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 237,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/113/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/113/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/113/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/113/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sowsow",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Rapid Spin",
			fr: "Tour Rapide",
		},
		text: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. If you do, your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. Dans ce cas, votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Triple Kick",
			fr: "Triple Pied",
		},
		text: {
			en: "Flip 3 coins. This attack does 40 damage for each heads.",
			fr: "Lancez 3 pièces. Cette attaque inflige 40 dégâts pour chaque côté face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
