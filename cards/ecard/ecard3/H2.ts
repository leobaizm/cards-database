import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ecard3-H2",
	localId: "H2",

	// Card informations
	name: {
		en: "Arcanine",
	},

	hp: 80,

	type: [
		Type.FIRE,
	],

	dexId: 59,


	evolveFrom: {
		en: "Growlithe",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Aya Kusube",

	abilities: [{
		id: 940,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Energy Recharge",
		},
		text: {
			en: "When you play Arcanine from your hand to evolve your Active Pokémon, you may flip 3 coins. For each heads, choose a basic energy card from your discard pile and attach it to Arcanine.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Shake",
		},
		text: {
			en: "Your opponent switches the Defending Pokémon with 1 of his or her Benched Pokémon, if any.",
		},
		damage: 10
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "White Flames",
		},
		text: {
			en: "Discard all Energy cards attached to Arcanine.",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Skyridge",
		code: "ecard3"
	}
}

export default card
