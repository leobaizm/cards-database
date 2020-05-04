import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw6-8",
	localId: 8,

	// Card informations
	name: {
		en: "Beautifly",
		fr: "Charmillon",
	},

	hp: 120,

	type: [
		Type.GRASS,
	],

	dexId: 267,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw6/8/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/8/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw6/8/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw6/8/high",
		},
	},

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Triple Energy",
			fr: "Triple Énergie",
		},
		text: {
			en: "Search your deck for 3 different types of basic Energy cards and attach them to your Pokémon in any way you like. Shuffle your deck afterward.",
			fr: "Cherchez dans votre deck 3 différents types de cartes Énergie de base et attachez-les à vos Pokémon de la manière que vous voulez. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Drainpour",
			fr: "Sangsue-Déluge",
		},
		text: {
			en: "Heal 40 damage from each of your Benched Pokémon.",
			fr: "Soignez 40 dégâts à chacun de vos Pokémon de Banc.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Dragons Exalted",
		code: "bw6"
	}
}

export default card
