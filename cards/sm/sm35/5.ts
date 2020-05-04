import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm35-5",
	localId: 5,

	// Card informations
	name: {
		en: "Breloom",
		fr: "Chapignon",
	},

	hp: 110,

	type: [
		Type.GRASS,
	],

	dexId: 286,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm35/5/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm35/5/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm35/5/high",
		},
	},

	evolveFrom: {
		en: "Shroomish",
		fr: "Balignon",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mizue",



	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Hibernation Spore",
			fr: "Spore d’Hibernation",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep. Your opponent flips 2 coins instead of 1 between turns. If either of them is tails, that Pokémon is still Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi. Votre adversaire lance 2 pièces au lieu d’une entre chaque tour. S'il obtient au moins un côté pile, le Pokémon reste Endormi.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Magnum Punch",
			fr: "Poing Magnum",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Shining Legends",
		code: "sm35"
	}
}

export default card
