import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex10-110",
	localId: 110,

	// Card informations
	name: {
		en: "Typhlosion ex",
	},

	hp: 150,

	type: [
		Type.FIRE,
	],

	dexId: 157,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex10/110/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex10/110/high",
		},
	},

	evolveFrom: {
		en: "Quilava",
	},

	tags: [
		Tag.EX,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 1368,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Bursting Up",
		},
		text: {
			en: "Once during your turn, when you play Typhlosion ex from your hand to evolve 1 of your Pokémon, count the number of your opponent's Benched Pokémon. You may search your deck for up to that number of Fire Energy cards and attach them to 1 of your Fire Pokémon. Shuffle your deck afterward.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Kindle",
		},
		text: {
			en: "Discard an Energy card attached to Typhlosion ex and then discard an Energy card attached to the Defending Pokémon.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	},{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unseen Forces",
		code: "ex10"
	}
}

export default card
