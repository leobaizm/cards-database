import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY13",
	localId: "XY13",

	// Card informations
	name: {
		en: "Machamp",
		fr: "Mackogneur",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 68,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY13/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY13/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY13/high",
		},
	},

	evolveFrom: {
		en: "Machoke",
		fr: "Machopeur",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "PLANETA",

	abilities: [{
		id: 740,
		type: AbilityType.TALENT,
		name: {
			en: "Fighting Fury",
			fr: "Furie Combative",
		},
		text: {
			en: "Each of your Fighting Pokémon's attacks do 20 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "Les attaques de vos Pokémon Fighting infligent 20 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Machamp Crush",
			fr: "Mackogneur Broyeur",
		},
		text: {
			en: "During your opponent's next turn, any damage done by attacks from the Defending Pokémon is reduced by 40 (before applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, tous les dégâts infligés par des attaques du Pokémon Défenseur sont réduits de 40 (avant application de la Faiblesse et de la Résistance).",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
