import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-94",
	localId: 94,

	// Card informations
	name: {
		en: "Dratini",
		fr: "Minidraco",
	},

	hp: 60,

	type: [
		Type.DRAGON,
	],

	dexId: 147,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/94/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/94/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/94/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/94/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Signs of Evolution",
			fr: "Signes d'Évolution",
		},
		text: {
			en: "Search your deck for a Dratini, a Dragonair, and a Dragonite, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez un Minidraco, un Draco et un Dracolosse dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Tail Smack",
			fr: "Coup de Queue",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
