import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-5",
	localId: 5,

	// Card informations
	name: {
		en: "Beautifly",
		fr: "Charmillon",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],

	dexId: 267,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/5/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/5/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/5/high",
		},
	},

	evolveFrom: {
		en: "Silcoon",
		fr: "Armulys",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Midori Harada",

	abilities: [{
		id: 758,
		type: AbilityType.TALENT,
		name: {
			en: "Miraculous Scales",
			fr: "Écailles Miraculeuses",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon-EX.",
			fr: "Évitez tous les dégâts infligés à ce Pokémon par des attaques des Pokémon-EX de votre adversaire.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Whirlwind",
			fr: "Cyclone",
		},
		text: {
			en: "You may have your opponent switch his or her Active Pokémon with 1 of his or her Benched Pokémon.",
			fr: "Vous pouvez demander à votre adversaire d'échanger son Pokémon Actif avec l'un de ses Pokémon de Banc.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
