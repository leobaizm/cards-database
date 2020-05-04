import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM71",
	localId: "SM71",

	// Card informations
	name: {
		en: "Kommo-o-GX",
		fr: "Ékaïser-GX",
	},

	hp: 240,

	type: [
		Type.DRAGON,
	],

	dexId: 784,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM71/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM71/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM71/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM71/high",
		},
	},

	evolveFrom: {
		en: "Hakamo-o",
		fr: "Écaïd",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Adamantine Press",
			fr: "Charge Adamantine",
		},
		text: {
			en: "During your opponent's next turn, this Pokémon takes 30 less damage from attacks (after applying Weakness and Resistance).",
			fr: "Pendant le prochain tour de votre adversaire, ce Pokémon subit 30 dégâts de moins provenant des attaques (après application de la Faiblesse et de la Résistance).",
		},
		damage: 30
	},{
		cost: [
			Type.LIGHTNING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Shred",
			fr: "Déchiquetage",
		},
		text: {
			en: "This attack's damage isn't affected by any effects on your opponent's Active Pokémon.",
			fr: "Les dégâts de cette attaque ne sont affectés par aucun effet en action sur le Pokémon Actif de votre adversaire.",
		},
		damage: 130
	},{
		cost: [
			Type.LIGHTNING,
			Type.FIGHTING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Ultra Uppercut-GX",
			fr: "Ultra Uppercut-GX",
		},
		text: {
			en: "(You can't use more than 1 GX attack in a game.)",
			fr: "(Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 240
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "SM Black Star Promos",
		code: "smp"
	}
}

export default card
