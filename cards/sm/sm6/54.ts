import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm6-54",
	localId: 54,

	// Card informations
	name: {
		en: "Hoopa",
		fr: "Hoopa",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 720,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm6/54/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/54/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm6/54/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm6/54/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Aya Kusube",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hyperspace Ring",
			fr: "Anneau Hyperespace",
		},
		text: {
			en: "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Then, shuffle your deck.",
			fr: "Cherchez jusqu’à 2 cartes Objet dans votre deck, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Psy Bolt",
			fr: "Choc Mental",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Forbidden Light",
		code: "sm6"
	}
}

export default card
