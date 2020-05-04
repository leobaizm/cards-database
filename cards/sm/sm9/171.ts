import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-171",
	localId: 171,

	// Card informations
	name: {
		en: "Eevee & Snorlax-GX",
		fr: "Évoli et Ronflex-GX",
	},

	hp: 270,

	type: [
		Type.COLORLESS,
	],

	dexId: 133,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/171/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/171/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/171/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/171/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Cheer Up",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "Attach an Energy card from your hand to 1 of your Pokémon.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dump Truck Press",
			fr: "Courage !",
		},
		text: {
			en: "If your opponent's Active Pokémon is an Evolution Pokémon, this attack does 120 more damage.",
			fr: "Attachez une carte Énergie de votre main à l’un de vos Pokémon.",
		},
		damage: 120
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Megaton Friends-GX",
			fr: "Pression Poids Lourd",
		},
		text: {
			en: "If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), draw cards until you have 10 cards in your hand. (You can't use more than 1 GX attack in a game.)",
			fr: "Si le Pokémon Actif de votre adversaire est un Pokémon Évolutif, cette attaque inflige 120 dégâts supplémentaires.",
		},
		damage: 210
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Amis Mégatonnes-GX",
		},
		text: {
			fr: "Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), piochez jusqu’à avoir 10 cartes en main. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 210
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
