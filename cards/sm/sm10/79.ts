import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-79",
	localId: 79,

	// Card informations
	name: {
		en: "Espurr",
		fr: "Psystigri",
	},

	hp: 60,

	type: [
		Type.PSYCHIC,
	],

	dexId: 677,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/79/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/79/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/79/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/79/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "HYOGONOSUKE",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Caturday",
			fr: "Chamedi",
		},
		text: {
			en: "Draw a card. If you do, this Pokémon is now Asleep.",
			fr: "Piochez une carte. Dans ce cas, ce Pokémon est maintenant Endormi.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ear Kinesis",
			fr: "Oreille Kinésique",
		},
		text: {
			en: "This attack does 20 damage to 1 of your opponent's Benched Pokémon for each damage counter on that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 20 dégâts à l’un des Pokémon de Banc de votre adversaire pour chaque marqueur de dégâts sur ce Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
