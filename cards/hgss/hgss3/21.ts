import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-21",
	localId: 21,

	// Card informations
	name: {
		en: "Skarmory",
		fr: "Airmure",
	},

	hp: 80,

	type: [
		Type.METAL,
	],

	dexId: 227,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/21/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/21/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/21/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/21/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Steel Coat",
			fr: "Manteau d'acier",
		},
		text: {
			en: "Search your deck for a Metal Energy card and attach it to 1 of your Pokémon. Shuffle your deck afterward.",
			fr: "Cherchez une carte Énergie Metal dans votre deck et attachez-la à l'un de vos Pokémon. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.METAL,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Wing",
			fr: "Aile tranchante",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
