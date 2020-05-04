import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-107",
	localId: 107,

	// Card informations
	name: {
		en: "Donphan",
		fr: "Donphan",
	},

	hp: 120,

	type: [
		Type.FIGHTING,
	],

	dexId: 232,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/107/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/107/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/107/high",
		},
	},

	evolveFrom: {
		en: "Phanpy",
		fr: "Phanpy",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kent Kanetsuna",

	abilities: [{
		id: 276,
		type: AbilityType.POKEBODY,
		name: {
			en: "Exoskeleton",
			fr: "Exosquelette",
		},
		text: {
			en: "Any damage done to Donphan by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Tout dégât infligé à Donphan par des attaques est réduit de 20 (après application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING
		],
		name: {
			en: "Earthquake",
			fr: "Séisme",
		},
		text: {
			en: "Does 10 damage to each of your Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Inflige 10 dégâts à chacun des Pokémon de votre Banc. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon du Banc.)",
		},
		damage: 60
	},{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Heavy Impact",
			fr: "Gros impact",
		},
		damage: 90
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.LIGHTNING,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
