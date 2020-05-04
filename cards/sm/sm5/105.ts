import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-105",
	localId: 105,

	// Card informations
	name: {
		en: "Eevee",
		fr: "Évoli",
	},

	hp: 60,

	type: [
		Type.COLORLESS,
	],

	dexId: 133,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/105/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/105/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/105/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/105/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.BASIC,
	],

	illustrator: "Hideki Ishikawa",



	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Palette of Friends",
			fr: "Palette d’Amis",
		},
		text: {
			en: "This attack does 10 damage for each different type of Pokémon on your Bench.",
			fr: "Cette attaque inflige 10 dégâts pour chaque type différent de Pokémon sur votre Banc.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
