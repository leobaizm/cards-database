import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-73",
	localId: 73,

	// Card informations
	name: {
		en: "Xerneas",
		fr: "Xerneas",
	},

	hp: 130,

	type: [
		Type.FAIRY,
	],

	dexId: 716,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/73/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/73/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/73/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/73/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Lead",
			fr: "Mentor",
		},
		text: {
			en: "Search your deck for a Supporter card, reveal it, and put it into your hand. Then, shuffle your deck.",
			fr: "Cherchez une carte Supporter dans votre deck, montrez-la, puis ajoutez-la à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Bright Horns",
			fr: "Cornes Lumineuses",
		},
		text: {
			en: "This Pokémon can't use Bright Horns during your next turn.",
			fr: "Ce Pokémon ne peut pas utiliser Cornes Lumineuses pendant votre prochain tour.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
