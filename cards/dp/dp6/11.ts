import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp6-11",
	localId: 11,

	// Card informations
	name: {
		en: "Mewtwo",
		fr: "Mewtwo",
	},

	hp: 80,

	type: [
		Type.PSYCHIC,
	],

	dexId: 150,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp6/11/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/11/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp6/11/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp6/11/high",
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
			en: "Hypnoblast",
			fr: "Hypnoblast",
		},
		text: {
			en: "The Defending Pokémon is now Asleep.",
			fr: "Le Pokémon Défenseur est maintenant Endormi.",
		},
		damage: 10
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Psychic",
			fr: "Psyko",
		},
		text: {
			en: "Does 40 damage plus 10 more damage for each Energy attached to the Defending Pokémon.",
			fr: "Inflige 40 dégâts plus 10 dégâts supplémentaires pour chaque Énergie attachée au Pokémon Défenseur.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "+20"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Legends Awakened",
		code: "dp6"
	}
}

export default card
