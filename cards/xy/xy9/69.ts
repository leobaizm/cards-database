import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-69",
	localId: 69,

	// Card informations
	name: {
		en: "Gabite",
		fr: "Carmache",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 444,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/69/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/69/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/69/high",
		},
	},

	evolveFrom: {
		en: "Gible",
		fr: "Griknot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Midori Harada",



	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Sand Tomb",
			fr: "Tourbi-Sable",
		},
		text: {
			en: "The Defending Pokémon can't retreat during your opponent's next turn.",
			fr: "Le Pokémon Défenseur ne peut pas battre en retraite pendant le prochain tour de votre adversaire.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
