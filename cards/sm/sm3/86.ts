import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm3-86",
	localId: 86,

	// Card informations
	name: {
		en: "Weavile",
		fr: "Dimoret",
	},

	hp: 90,

	type: [
		Type.DARKNESS,
	],

	dexId: 461,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm3/86/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/86/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm3/86/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm3/86/high",
		},
	},

	evolveFrom: {
		en: "Sneasel",
		fr: "Farfuret",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Satoshi Shirai",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Rule of Evil",
			fr: "Règne Maléfique",
		},
		text: {
			en: "This attack does 60 damage to each Pokémon that has an Ability (both yours and your opponent's). (Don't apply Weakness and Resistance for Benched Pokémon.)",
			fr: "Cette attaque inflige 60 dégâts à chacun des Pokémon ayant un talent (les vôtres et ceux de votre adversaire). (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
		},
	},{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Slash",
			fr: "Tranche",
		},
		damage: 70
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],



	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Burning Shadows",
		code: "sm3"
	}
}

export default card
