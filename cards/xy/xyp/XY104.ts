import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xyp-XY104",
	localId: "XY104",

	// Card informations
	name: {
		en: "M Mawile-EX",
		fr: "M-Mysdibule-EX",
	},

	hp: 190,

	type: [
		Type.FAIRY,
	],

	dexId: 303,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY104/low",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY104/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xyp/XY104/high",
			fr: "https://assets.tcgdex.net/fr/xy/xyp/XY104/high",
		},
	},

	evolveFrom: {
		en: "Mawile-EX",
		fr: "Mysdibule-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.FAIRY,
			Type.FAIRY,
			Type.FAIRY
		],
		name: {
			en: "Twin Grapple",
			fr: "Lutte Duo",
		},
		text: {
			en: "Flip 2 coins. For each heads, discard an Energy attached to your opponent's Active Pokémon.",
			fr: "Lancez 2 pièces. Pour chaque côté face, défaussez une Énergie attachée au Pokémon Actif de votre adversaire.",
		},
		damage: 130
	}],

	weaknesses: [{
		type: Type.METAL,
		value: "×2"
	}],

	resistances: [{
		type: Type.DARKNESS,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "XY Black Star Promos",
		code: "xyp"
	}
}

export default card
