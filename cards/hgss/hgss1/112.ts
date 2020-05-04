import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-112",
	localId: 112,

	// Card informations
	name: {
		en: "Ho-Oh LEGEND",
		fr: "Ho-Oh LÉGENDAIRE",
	},



	type: [
		Type.FIRE,
	],

	dexId: 250,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/112/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/112/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/112/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/112/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.LEGEND,
	],

	illustrator: "Shinji Higuchi",

	abilities: [{
		id: 1075,
		type: AbilityType.POKEBODY,
		name: {
			en: "Sacred Rainbow",
			fr: "Arc-en-ciel sacré",
		},
		text: {
			en: "All energy attached to Ho-Oh LEGEND are Fire Energy instead of their usual type.",
			fr: "Toute les énergies attachées au Ho-Oh LÉGENDAIRE sont de type Fire et non de leur type habituel.",
		}
	}],

	attacks: [{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.FIRE,
			Type.FIRE
		],
		name: {
			en: "Bright Wing",
			fr: "Ailes lumineuses",
		},
		text: {
			en: "Discard an Energy attached to Ho-Oh LEGEND.",
			fr: "Défaussez-vous d’une Énergie attachée au Ho-Oh LÉGENDAIRE.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
