import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-71",
	localId: 71,

	// Card informations
	name: {
		en: "Starmie",
		fr: "Staross",
	},

	hp: 80,

	type: [
		Type.WATER,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/71/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/71/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/71/high",
		},
	},

	evolveFrom: {
		en: "Staryu",
		fr: "Sterndu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.WATER
		],
		name: {
			en: "Star Boomerang",
			fr: "Star-boomerang",
		},
		text: {
			en: "You may return Starmie and all cards attached to it to your hand.",
			fr: "Vous pouvez reprendre dans votre main Staross ainsi que toutes les cartes qui lui sont attachées.",
		},
		damage: 30
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Core Flash",
			fr: "Flash=coeur",
		},
		text: {
			en: "Choose 1 of your opponent's Pokémon that has any Poké-Powers or Poké-Bodies. This attack does 50 damage to that Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Choisissez 1 des Pokémon de votre adversaire possédant des Poké-Powers ou des Poké-Bodies. Cette attaque lui inflige 50 dégâts. (Vous ne pouvez pas appliquer la Faiblesse et la Résistance aux Pokémon de Banc.)",
		},
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "+20"
	}],





	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
