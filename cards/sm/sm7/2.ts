import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-2",
	localId: 2,

	// Card informations
	name: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},

	hp: 80,

	type: [
		Type.GRASS,
	],

	dexId: 70,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/2/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/2/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/2/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/2/high",
		},
	},

	evolveFrom: {
		en: "Bellsprout",
		fr: "Chétiflor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Miki Tanaka",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Growth",
			fr: "Croissance",
		},
		text: {
			en: "Attach up to 2 Grass Energy cards from your hand to this Pokémon.",
			fr: "Attachez jusqu’à 2 cartes Énergie Grass de votre main à ce Pokémon.",
		},
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Double Razor Leaf",
			fr: "Double Tranch’Herb",
		},
		text: {
			en: "Flip 2 coins. This attack does 30 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 30 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
