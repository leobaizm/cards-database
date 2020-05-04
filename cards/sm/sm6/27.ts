import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-27",
	localId: 27,

	// Card informations
	name: {
		en: "Amaura",
		fr: "Amagara",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 698,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/27/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/27/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/27/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/27/high",
		},
	},

	evolveFrom: {
		en: "Unidentified Fossil",
		fr: "Fossile Inconnu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Atsuko Nishida",



	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Powder Snow",
			fr: "Poudreuse",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Aurora Beam",
			fr: "Onde Boréale",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
