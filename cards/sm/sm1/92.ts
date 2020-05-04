import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm1-92",
	localId: 92,

	// Card informations
	name: {
		en: "Cutiefly",
		fr: "Bombydou",
	},

	hp: 30,

	type: [
		Type.FAIRY,
	],

	dexId: 742,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm1/92/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/92/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm1/92/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm1/92/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Fly Around",
			fr: "Papillonnement",
		},
		text: {
			en: "If any damage is done to this Pokémon by attacks during your opponent's next turn, flip a coin. If heads, prevent that damage.",
			fr: "Si des dégâts sont infligés à ce Pokémon par des attaques pendant le prochain tour de votre adversaire, lancez une pièce. Si c'est face, évitez ces dégâts.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Sun & Moon",
		code: "sm1"
	}
}

export default card
