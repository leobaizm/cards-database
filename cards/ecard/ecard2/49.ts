import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard2-49",
	localId: 49,

	// Card informations
	name: {
		en: "Gloom",
	},

	hp: 70,

	type: [
		Type.GRASS,
	],

	dexId: 44,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/49/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ecard/ecard2/49/high",
		},
	},

	evolveFrom: {
		en: "Oddish",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kyoko Umemoto",

	abilities: [{
		id: 1294,
		type: AbilityType.POKEBODY,
		name: {
			en: "Enervating Pollen",
		},
		text: {
			en: "As long as Gloom is in play, Resistance on each player's Pokémon only reduces damage by 10.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Sleep Sap",
		},
		text: {
			en: "Both the Defending Pokémon and Gloom are now Asleep (after doing damage).",
		},
		damage: 20
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Aquapolis",
		code: "ecard2"
	}
}

export default card
