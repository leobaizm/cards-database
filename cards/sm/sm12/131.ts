import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-131",
	localId: 131,

	// Card informations
	name: {
		en: "Alolan Muk",
		fr: "Grotadmorv d’Alola",
	},

	hp: 140,

	type: [
		Type.DARKNESS,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/131/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/131/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/131/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/131/high",
		},
	},

	evolveFrom: {
		en: "Alolan Grimer",
		fr: "Tadmorv d’Alola",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "MAHOU",



	attacks: [{
		cost: [
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Panic Poison",
			fr: "Poison Panique",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Burned, Confused, and Poisoned.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Brûlé, Confus et Empoisonné.",
		},
		damage: 20
	},{
		cost: [
			Type.DARKNESS,
			Type.DARKNESS,
			Type.COLORLESS
		],
		name: {
			en: "Sludge Bomb",
			fr: "Bomb-Beurk",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.PSYCHIC,
		value: "-20"
	}],

	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
