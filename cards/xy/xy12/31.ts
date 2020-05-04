import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy12-31",
	localId: 31,

	// Card informations
	name: {
		en: "Starmie",
		fr: "Staross",
	},

	hp: 90,

	type: [
		Type.WATER,
	],

	dexId: 121,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy12/31/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/31/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy12/31/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy12/31/high",
		},
	},

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Keiji Kinebuchi",

	abilities: [{
		id: 1353,
		type: AbilityType.TALENT,
		name: {
			en: "Space Beacon",
		},
		text: {
			en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, put 2 basic Energy cards from your discard pile into your hand. (You can't choose a card you discarded with the effect of this Ability.)",
		}
	}],

	attacks: [{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			en: "Star Freeze",
			fr: "Talent : Lumière Spatiale",
		},
		text: {
			en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, prenez 2 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main. (Vous ne pouvez pas choisir une carte que vous avez défaussée du fait de l'effet de ce talent.)",
		},
		damage: 30
	},{
		cost: [
			Type.WATER,
			Type.COLORLESS
		],
		name: {
			fr: "Étoile Gelante",
		},
		text: {
			fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Evolutions",
		code: "xy12"
	}
}

export default card
