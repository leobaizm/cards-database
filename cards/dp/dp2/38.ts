import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp2-38",
	localId: 38,

	// Card informations
	name: {
		en: "Ursaring",
	},

	hp: 100,

	type: [
		Type.COLORLESS,
	],

	dexId: 217,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp2/38/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp2/38/high",
		},
	},

	evolveFrom: {
		en: "Teddiursa",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Bad Temper",
		},
		text: {
			en: "The Defending Pokémon is now Confused. During your opponent's next turn, that Pokémon's attacks do 60 more damage to the Active Pokémon (before applying Weakness and Resistance).",
		},
		damage: 30
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Defensive Claw",
		},
		text: {
			en: "If Teddiursa is on your Bench, this attack does 60 damage plus 20 more damage. If Teddiursa on your Bench has any damage counters on it, this attack does 60 damage plus 40 more damage and remove all damage counters from that Pokémon.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+20"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Mysterious Treasures",
		code: "dp2"
	}
}

export default card
