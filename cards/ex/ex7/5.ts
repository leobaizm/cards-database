import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex7-5",
	localId: 5,

	// Card informations
	name: {
		en: "Dark Houndoom",
	},

	hp: 70,

	type: [
		Type.DARKNESS,
		Type.DARKNESS,
	],

	dexId: 229,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex7/5/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex7/5/high",
		},
	},

	evolveFrom: {
		en: "Houndour",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Shakedown",
		},
		text: {
			en: "Choose a card from your opponent's hand without looking and discard it.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Dark Fire",
		},
		text: {
			en: "You may discard a Fire Energy or Darkness Energy attached to Dark Houndoom. If you do, this attack does 40 damage plus 20 more damage.\"",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	},{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-30"
	},{
		type: Type.PSYCHIC,
		value: "-30"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Rocket Returns",
		code: "ex7"
	}
}

export default card
