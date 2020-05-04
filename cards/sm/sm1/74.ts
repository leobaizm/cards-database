import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-74",
	localId: 74,

	// Card informations
	name: {
		en: "Sandygast",
		fr: "Bacabouh",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 769,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/74/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/74/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/74/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/74/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Shore Up",
			fr: "Amass'Sable",
		},
		text: {
			en: "Attach a Fighting Energy card from your discard pile to this Pokémon.",
			fr: "Attachez une carte Énergie Fighting de votre pile de défausse à ce Pokémon.",
		},
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sand Tomb",
			fr: "Tourbi-Sable",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
