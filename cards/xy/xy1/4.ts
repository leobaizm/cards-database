import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy1-4",
	localId: 4,

	// Card informations
	name: {
		en: "Kakuna",
		fr: "Coconfort",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 14,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy1/4/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy1/4/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy1/4/high",
		},
	},

	evolveFrom: {
		en: "Weedle",
		fr: "Aspicot",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Harden",
			fr: "Armure",
		},
		text: {
			en: "During your opponent's next turn, if this Pokémon would be damaged by an attack, prevent that attack's damage done to this Pokémon if that damage is 60 or less.",
			fr: "Pendant le prochain tour de votre adversaire, si ce Pokémon doit subir les dégâts d'une attaque, évitez les dégâts infligés à ce Pokémon si ces dégâts sont de 60 ou moins.",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "XY",
		code: "xy1"
	}
}

export default card
