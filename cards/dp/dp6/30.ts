import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-30",
	localId: 30,

	// Card informations
	name: {
		en: "Heatran",
		fr: "Heatran",
	},

	hp: 100,

	type: [
		Type.METAL,
	],

	dexId: 485,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/30/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/30/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/30/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/30/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 1047,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Smelt",
			fr: "Fondre",
		},
		text: {
			en: "Once during your turn (before your attack), you may move a Metal Energy attached to 1 of your Pokémon to Heatran. This power can't be used if Heatran is affected by a Special Condition.",
			fr: "Une seule fois lors de votre tour (avant votre attaque), vous pouvez déplacer sur Heatran une Énergie Metal attachée à 1 de vos Pokémon. Ce pouvoir ne peut pas être utilisé si Heatran est affecté par un État Spécial.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Heavy Metal",
			fr: "Heavy Métal",
		},
		text: {
			en: "Flip a coin for each Metal Energy attached to Heatran. This attack does 40 damage plus 20 more damage for each heads.",
			fr: "Lancez une pièce pour chaque Énergie Metal attachée à Heatran. Cette attaque inflige 40 dégâts plus 20 dégâts supplémentaires pour chaque face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
