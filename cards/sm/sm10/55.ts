import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-55",
	localId: 55,

	// Card informations
	name: {
		en: "Raichu",
		fr: "Raichu",
	},

	hp: 120,

	type: [
		Type.LIGHTNING,
	],

	dexId: 26,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/55/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/55/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/55/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/55/high",
		},
	},

	evolveFrom: {
		en: "Pikachu",
		fr: "Pikachu",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Shin Nagasawa",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Never Give Up",
			fr: "Persistance",
		},
		text: {
			en: "You can use this attack only if you have at least 3 more Prize cards remaining than your opponent. Attach all Lightning Energy cards from your discard pile to your Pokémon in any way you like.",
			fr: "Vous ne pouvez utiliser cette attaque que s’il vous reste au moins 3 cartes Récompense de plus qu’à votre adversaire. Attachez toutes les cartes Énergie Lightning de votre pile de défausse à vos Pokémon, de la manière que vous voulez.",
		},
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Head Bolt",
			fr: "Éclair Frontal",
		},
		damage: 110
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
