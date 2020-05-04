import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-76",
	localId: 76,

	// Card informations
	name: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},

	hp: 90,

	type: [
		Type.DRAGON,
	],

	dexId: 783,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/76/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/76/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/76/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/76/high",
		},
	},

	evolveFrom: {
		en: "Jangmo-o",
		fr: "Bébécaille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Masakazu Fukuda",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Noble Roar",
			fr: "Râle Mâle",
		},
		text: {
			en: "Your opponent switches their Active Pokémon with 1 of their Benched Pokémon.",
			fr: "Votre adversaire échange son Pokémon Actif avec l’un de ses Pokémon de Banc.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.FIGHTING
		],
		name: {
			en: "Dragon Claw",
			fr: "Dracogriffe",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
