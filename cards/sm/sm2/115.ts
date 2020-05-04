import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-115",
	localId: 115,

	// Card informations
	name: {
		en: "Drampa-GX",
		fr: "Draïeul-GX",
	},

	hp: 180,

	type: [
		Type.COLORLESS,
	],

	dexId: 780,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/115/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/115/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/115/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/115/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Righteous Edge",
			fr: "Lame Vertueuse",
		},
		text: {
			en: "Discard a Special Energy from your opponent's Active Pokémon.",
			fr: "Défaussez une Énergie spéciale du Pokémon Actif de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Berserk",
			fr: "Dracolère",
		},
		text: {
			en: "If your Benched Pokémon have any damage counters on them, this attack does 70 more damage.",
			fr: "Si des marqueurs de dégâts sont placés sur vos Pokémon de Banc, cette attaque inflige 70 dégâts supplémentaires.",
		},
		damage: 80
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Big Wheel-GX",
			fr: "Grande Roue-GX",
		},
		text: {
			en: "Shuffle your hand into your deck. Then, draw 10 cards. (You can't use more than 1 GX attack in a game.)",
			fr: "Mélangez votre main avec votre deck. Ensuite, piochez 10 cartes. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
