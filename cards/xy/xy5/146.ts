import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-146",
	localId: 146,

	// Card informations
	name: {
		en: "Camerupt-EX",
		fr: "Camérupt-EEX",
	},

	hp: 180,

	type: [
		Type.FIRE,
	],

	dexId: 323,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/146/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/146/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/146/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/146/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.EX,
	],

	illustrator: "Ryo Ueda",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Tumbling Attack",
			fr: "Attaque Trébuchante",
		},
		text: {
			en: "Flip a coin. If heads, this attack does 30 more damage.",
			fr: "Lancez une pièce. Si c'est face, cette attaque inflige 30 dégâts supplémentaires.",
		},
		damage: 30
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Explosive Jet",
			fr: "Souffle Explosif",
		},
		text: {
			en: "Discard as many Fire Energy attached to your Pokémon as you like. This attack does 50 damage times the number of Energy cards you discarded.",
			fr: "Défaussez autant d'Énergies Fire attachées à vos Pokémon que vous voulez. Cette attaque inflige 50 dégâts multipliés par le nombre de cartes Énergie que vous avez défaussées.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
