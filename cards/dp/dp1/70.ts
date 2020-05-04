import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp1-70",
	localId: 70,

	// Card informations
	name: {
		en: "Bidoof",
		fr: "Keunotor",
	},

	hp: 50,

	type: [
		Type.COLORLESS,
	],

	dexId: 399,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp1/70/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/70/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp1/70/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp1/70/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Amnesia",
			fr: "Amnésie",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
		},
	},{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Scavenge",
			fr: "Farfouille",
		},
		text: {
			en: "Search your discard pile for a Trainer card, show it to your opponent, and put it into your hand.",
			fr: "Choisissez une carte Dresseur dans votre pile de défausse, montrez-la à votre adversaire et placez-la dans votre main.",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+10"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Diamond & Pearl",
		code: "dp1"
	}
}

export default card
