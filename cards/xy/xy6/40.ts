import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy6-40",
	localId: 40,

	// Card informations
	name: {
		en: "Absol",
		fr: "Absol",
	},

	hp: 100,

	type: [
		Type.DARKNESS,
	],

	dexId: 359,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy6/40/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy6/40/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy6/40/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Kagemaru Himeno",

	abilities: [{
		id: 31,
		type: AbilityType.TALENT,
		name: {
			en: "Cursed Eyes",
			fr: "Yeux Maléfiques",
		},
		text: {
			en: "When you play this Pokémon from your hand onto your Bench, you may move 3 damage counters from 1 of your opponent's Pokémon to another of his or her Pokémon.",
			fr: "Lorsque vous jouez ce Pokémon de votre main sur votre Banc, vous pouvez déplacer 3 marqueurs de dégâts de l'un des Pokémon de votre adversaire vers un autre de ses Pokémon.",
		}
	}],

	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Mach Claw",
			fr: "Instagriffe",
		},
		text: {
			en: "This attack's damage isn't affected by Resistance.",
			fr: "Les dégâts de cette attaque ne sont pas affectés par la Résistance.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Roaring Skies",
		code: "xy6"
	}
}

export default card
