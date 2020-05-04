import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss2-64",
	localId: 64,

	// Card informations
	name: {
		en: "Stantler",
		fr: "Cerfrousse",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 234,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/64/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/64/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss2/64/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss2/64/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Call for Family",
			fr: "Appel à la famille",
		},
		text: {
			en: "Search your deck for up to 2 Basic Pokémon and put them onto your Bench. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck jusqu'à deux cartes Pokémon de base et placez-les sur votre Banc. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Mystifying Horns",
			fr: "Mysti-cornes",
		},
		text: {
			en: "The Defending Pokémon is now Confused.",
			fr: "Le Pokémon Défenseur est maintenant Confus.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "HS—Unleashed",
		code: "hgss2"
	}
}

export default card
