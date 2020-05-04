import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy11-32",
	localId: 32,

	// Card informations
	name: {
		en: "Samurott",
		fr: "Clamiral",
	},

	hp: 140,

	type: [
		Type.WATER,
	],

	dexId: 503,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy11/32/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy11/32/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy11/32/high",
		},
	},

	evolveFrom: {
		en: "Dewott",
		fr: "Mateloutre",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoyo Kimura",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Ultimate Blade",
			fr: "Ultime Lame",
		},
		text: {
			en: "If the damage from this attack reduces your opponent's Active Pokémon's HP to 60 or less, that Pokémon is Knocked Out.",
			fr: "Si les dégâts de cette attaque réduisent les PV du Pokémon Actif de votre adversaire à 60 ou moins, ce dernier est mis K.O.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Pike",
			fr: "Javelot",
		},
		text: {
			en: "This attack does 30 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Steam Siege",
		code: "xy11"
	}
}

export default card
