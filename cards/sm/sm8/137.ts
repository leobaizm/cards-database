import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-137",
	localId: 137,

	// Card informations
	name: {
		en: "Snubbull",
		fr: "Snubbull",
	},

	hp: 70,

	type: [
		Type.FAIRY,
	],

	dexId: 209,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/137/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/137/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/137/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/137/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Akira Komayama",



	attacks: [{
		cost: [
			Type.FAIRY
		],
		name: {
			en: "Make a Mess",
			fr: "Bazar Garanti",
		},
		text: {
			en: "Discard up to 2 Trainer cards from your hand. This attack does 20 damage for each card you discarded in this way.",
			fr: "Défaussez jusqu’à 2 cartes Dresseur de votre main. Cette attaque inflige 20 dégâts pour chaque carte défaussée de cette façon.",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
