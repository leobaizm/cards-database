import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "g1-53",
	localId: 53,

	// Card informations
	name: {
		en: "Meowth",
		fr: "Miaouss",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 52,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/g1/53/low",
			fr: "https://assets.tcgdex.net/fr/xy/g1/53/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/g1/53/high",
			fr: "https://assets.tcgdex.net/fr/xy/g1/53/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Exhausted Tackle",
			fr: "Tacle Épuisé",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage to your opponent's Active Pokémon. If tails, this Pokémon does 30 damage to itself.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts au Pokémon Actif de votre adversaire. Si c'est pile, ce Pokémon s'inflige 30 dégâts.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Generations",
		code: "g1"
	}
}

export default card
