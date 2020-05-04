import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-46",
	localId: 46,

	// Card informations
	name: {
		en: "Anorith",
		fr: "Anorith",
	},

	hp: 80,

	type: [
		Type.FIGHTING,
	],

	dexId: 347,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/46/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/46/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/46/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/46/high",
		},
	},

	evolveFrom: {
		en: "Claw Fossil",
		fr: "Klauenfossil",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Guard Claw",
			fr: "Griffe de garde",
		},
		text: {
			en: "During your opponent's next turn, any damage done to Anorith by attacks is reduced by 20 (after applying Weakness and Resistance).",
			fr: "Lors du prochain tour de votre adversaire, tous dégâts infligés à Anorith par des attaques sont réduits de 20 (après application de la Faiblesse et de la Résistance).",
		},
		damage: 20
	},{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "X-Scissor",
			fr: "Plaie-Croix",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 damage plus 20 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts plus 20 dégâts supplémentaires.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "+20"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
