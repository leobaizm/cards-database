import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex16-31",
	localId: 31,

	// Card informations
	name: {
		en: "Kirlia",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
	],

	dexId: 281,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex16/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex16/31/high",
		},
	},

	evolveFrom: {
		en: "Ralts",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Sachiko Adachi",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Hypnosis",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Dream Eater",
		},
		text: {
			en: "If the Defending Pokémon is not Asleep, this attack does nothing.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Power Keepers",
		code: "ex16"
	}
}

export default card
