import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM136",
	localId: "SM136",

	// Card informations
	name: {
		en: "Latios",
		fr: "Latios",
	},

	hp: 120,

	type: [
		Type.DRAGON,
	],

	dexId: 381,


	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Extract",
			fr: "Extraction d’Énergie",
		},
		text: {
			en: "Search your deck for a basic Energy card and attach it to this Pokémon. Then, shuffle your deck.",
			fr: "Cherchez une carte Énergie de base dans votre deck et attachez-la à ce Pokémon. Mélangez ensuite votre deck.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Luster Purge",
			fr: "Lumi-Éclat",
		},
		text: {
			en: "Flip a coin. If tails, discard all Energy attached to this Pokémon.",
			fr: "Lancez une pièce. Si c’est pile, défaussez toute l’Énergie de ce Pokémon.",
		},
		damage: 140
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.Common,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
