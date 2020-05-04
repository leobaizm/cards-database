import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw10-69",
	localId: 69,

	// Card informations
	name: {
		en: "Haxorus",
		fr: "Tranchodon",
	},

	hp: 140,

	type: [
		Type.DRAGON,
	],

	dexId: 612,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw10/69/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/69/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw10/69/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw10/69/high",
		},
	},

	evolveFrom: {
		en: "Fraxure",
		fr: "Incisache",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Kouki Saitou",



	attacks: [{
		cost: [
			Type.METAL
		],
		name: {
			en: "Dragonaxe",
			fr: "Hache Draconique",
		},
		text: {
			en: "Does 40 damage times the amount of Metal Energy attached to this Pokémon.",
			fr: "Inflige 40 dégâts multipliés par le nombre d'Énergies Metal attachées à ce Pokémon.",
		},
		damage: 40
	},{
		cost: [
			Type.FIGHTING,
			Type.METAL
		],
		name: {
			en: "Strike of the Champion",
			fr: "Frappe de Maître",
		},
		text: {
			en: "If the Defending Pokémon is a Team Plasma Pokémon, it is Knocked Out. (If the Defending Pokémon is not a Team Plasma Pokémon, this attack does nothing.)",
			fr: "Si le Pokémon Défenseur est un Pokémon de la Team Plasma, il est mis K.O. (Si le Pokémon Défenseur n'est pas un Pokémon de la Team Plasma, cette attaque ne fait rien.)",
		},
	}],

	weaknesses: [{
		type: Type.DRAGON,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Plasma Blast",
		code: "bw10"
	}
}

export default card
