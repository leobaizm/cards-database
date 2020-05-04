import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss4-51",
	localId: 51,

	// Card informations
	name: {
		en: "Unown",
		fr: "Zarbi",
	},

	hp: 50,

	type: [
		Type.PSYCHIC,
	],

	dexId: 201,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/51/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/51/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss4/51/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss4/51/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hideaki Hakozaki",

	abilities: [{
		id: 770,
		type: AbilityType.POKEPOWER,
		name: {
			en: "CURE",
			fr: "GUÉRISON",
		},
		text: {
			en: "Once during your turn, when you put Unown from your hand onto your Bench, remove all Special Conditions from your Active Pokémon.",
			fr: "Une seule fois pendant votre tour, lorsque vous placez Zarbi de votre main sur votre Banc, retirez tous les États Spéciaux à votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Hidden Power",
			fr: "Puissance cachée",
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
		name: "HS—Triumphant",
		code: "hgss4"
	}
}

export default card
