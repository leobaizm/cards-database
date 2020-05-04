import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-155",
	localId: 155,

	// Card informations
	name: {
		en: "Fraxure",
		fr: "Incisache",
	},

	hp: 90,

	type: [
		Type.DRAGON,
	],

	dexId: 611,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/155/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/155/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/155/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/155/high",
		},
	},

	evolveFrom: {
		en: "Axew",
		fr: "Coupenotte",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "tetsuya koizumi",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Guard Press",
			fr: "Pression de Garde",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.METAL,
			Type.COLORLESS
		],
		name: {
			en: "Guillotine",
			fr: "Guillotine",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
