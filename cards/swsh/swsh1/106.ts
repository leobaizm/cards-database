import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-106",
	localId: 106,

	// Card informations
	name: {
		en: "Mudsdale",
		fr: "Bourrinos",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/106/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/106/low",
		}
	},

	evolveFrom: {
		en: "Mudbray",
		fr: "Tiboudet",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.FIGHTING,
			Type.FIGHTING
		],
		name: {
			en: "Double Impact",
			fr: "Double Impact",
		},
		text: {
			en: "Flip 2 coins. This attack does 120 damage for each heads.",
			fr: "Lancez 2 pièces. Cette attaque inflige 120 dégâts pour chaque côté face.",
		},
		damage: "120×"
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
