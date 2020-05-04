import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm2-110",
	localId: 110,

	// Card informations
	name: {
		en: "Fletchinder",
		fr: "Braisillon",
	},

	hp: 70,

	type: [
		Type.COLORLESS,
	],

	dexId: 662,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm2/110/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm2/110/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm2/110/high",
		},
	},

	evolveFrom: {
		en: "Fletchling",
		fr: "Passerouge",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kawayoo",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Flap",
			fr: "Battement",
		},
		damage: 20
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Razor Wind",
			fr: "Coupe-Vent",
		},
		text: {
			en: "Flip a coin. If tails, this attack does nothing.",
			fr: "Lancez une pièce. Si c’est pile, cette attaque ne fait rien.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Guardians Rising",
		code: "sm2"
	}
}

export default card
