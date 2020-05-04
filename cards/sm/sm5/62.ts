import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-62",
	localId: 62,

	// Card informations
	name: {
		en: "Lunala ◇",
		fr: "Lunala ",
	},

	hp: 160,

	type: [
		Type.PSYCHIC,
	],

	dexId: 792,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/62/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/62/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/62/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/62/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hitoshi Ariga",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Full Moon Star",
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
		text: {
			en: "For each of your opponent's Pokémon in play, attach a Psychic Energy card from your discard pile to your Pokémon in any way you like.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			en: "Psystorm",
			fr: "Étoile Pleine Lune",
		},
		text: {
			en: "This attack does 20 damage times the amount of Energy attached to all Pokémon.",
			fr: "Pour chaque Pokémon de votre adversaire en jeu, attachez une carte Énergie Psychic de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
		},
		damage: 20
	},{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.PSYCHIC
		],
		name: {
			fr: "Tempête Psy",
		},
		text: {
			fr: "Cette attaque inflige 20 dégâts multipliés par le nombre d’Énergies attachées aux Pokémon.",
		},
		damage: "20×"
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
