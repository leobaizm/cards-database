import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-125",
	localId: 125,

	// Card informations
	name: {
		en: "Aggron",
		fr: "Galeking",
	},

	hp: 170,

	type: [
		Type.METAL,
	],

	dexId: 306,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/125/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/125/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/125/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/125/high",
		},
	},

	evolveFrom: {
		en: "Lairon",
		fr: "Galegon",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Satoshi Shirai",



	attacks: [{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Extra-Tight Press",
			fr: "Pression Super Serrée",
		},
		text: {
			en: "During your opponent's next turn, if this Pokémon is damaged by an attack (even if this Pokémon is Knocked Out), put 8 damage counters on the Attacking Pokémon.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon subit les dégâts d’une attaque (même si ce Pokémon est mis K.O.), placez 8 marqueurs de dégâts sur le Pokémon Attaquant.",
		},
		damage: 80
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Giga Impact",
			fr: "Giga Impact",
		},
		text: {
			en: "This Pokémon can't attack during your next turn.",
			fr: "Ce Pokémon ne peut pas attaquer pendant votre prochain tour.",
		},
		damage: 160
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
