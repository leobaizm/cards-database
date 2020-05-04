import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-107",
	localId: 107,

	// Card informations
	name: {
		en: "Heracross",
		fr: "Scarhino",
	},

	hp: 100,

	type: [
		Type.FIGHTING,
	],

	dexId: 214,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/107/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/107/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/107/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/107/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Turn the Tables",
			fr: "Retournement de Situation",
		},
		text: {
			en: "If 1 of your opponent's Pokémon used a GX attack during their last turn, your opponent shuffles their Active Pokémon and all cards attached to it into their deck.",
			fr: "Si l’un des Pokémon de votre adversaire a utilisé une attaque GX pendant son dernier tour, votre adversaire mélange son Pokémon Actif et toutes les cartes qui lui sont attachées avec son deck.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
