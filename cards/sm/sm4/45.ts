import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm4-45",
	localId: 45,

	// Card informations
	name: {
		en: "Gourgeist",
		fr: "Banshitrouye",
	},

	hp: 120,

	type: [
		Type.PSYCHIC,
	],

	dexId: 711,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm4/45/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/45/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm4/45/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm4/45/high",
		},
	},

	evolveFrom: {
		en: "Pumpkaboo",
		fr: "Pitrouille",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "kirisAki",



	attacks: [{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Confuse Ray",
			fr: "Onde Folie",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Confused.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Confus.",
		},
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pumpkin Bomb",
			fr: "Bombe Citrouille",
		},
		text: {
			en: "Before doing damage, you may discard any number of Pokémon Tool cards from your Pokémon. This attack does 40 more damage for each card you discarded in this way.",
			fr: "Avant d’infliger des dégâts, vous pouvez défausser autant de cartes Outil Pokémon que vous voulez de vos Pokémon. Cette attaque inflige 40 dégâts supplémentaires pour chaque carte défaussée de cette façon.",
		},
		damage: 10
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Crimson Invasion",
		code: "sm4"
	}
}

export default card
