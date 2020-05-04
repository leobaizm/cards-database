import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-137",
	localId: 137,

	// Card informations
	name: {
		en: "Togetic",
		fr: "Togetic",
	},

	hp: 80,

	type: [
		Type.FAIRY,
	],

	dexId: 176,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/137/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/137/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/137/high",
		},
	},

	evolveFrom: {
		en: "Togepi",
		fr: "Togepi",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Energy Present",
			fr: "Cadeau d’Énergie",
		},
		text: {
			en: "Attach an Energy card from your hand to 1 of your Benched Pokémon.",
			fr: "Attachez une carte Énergie de votre main à l’un de vos Pokémon de Banc.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.COLORLESS
		],
		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
