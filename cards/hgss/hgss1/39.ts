import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-39",
	localId: 39,

	// Card informations
	name: {
		en: "Delibird",
		fr: "Cadoizo",
	},

	hp: 70,

	type: [
		Type.WATER,
	],

	dexId: 225,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/39/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/39/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/39/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/39/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "sui",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Snowy Present",
			fr: "Cadeau enneigé",
		},
		text: {
			en: "Draw a card for each Water Energy attached to all of your Pokémon.",
			fr: "Piochez une carte pour chaque carte Énergie Water attachée à l’ensemble de vos Pokémon.",
		},
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Hail",
			fr: "Grêle",
		},
		text: {
			en: "This attack does 10 damage to each of your opponent's Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 10 dégâts à chacun des Pokémon de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
