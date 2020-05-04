import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "smp-SM172",
	localId: "SM172",

	// Card informations
	name: {
		en: "Vaporeon-GX",
		fr: "Aquali-GX",
	},

	hp: 210,

	type: [
		Type.WATER,
	],

	dexId: 134,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM172/low",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM172/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/smp/SM172/high",
			fr: "https://assets.tcgdex.net/fr/sm/smp/SM172/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.GX,
	],

	illustrator: "PLANETA Otani",

	abilities: [{
		id: 1401,
		type: AbilityType.TALENT,
		name: {
			en: "Hydrating Drops",
			fr: "Gouttes Hydratantes",
		},
		text: {
			en: "Once during your turn (before your attack), you may heal 30 damage from your Active Water Pokémon.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez soigner 30 dégâts à votre Pokémon Actif Water.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Hydro Pump",
			fr: "Hydrocanon",
		},
		text: {
			en: "This attack does 30 more damage times the amount of Water Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires multipliés par le nombre d’Énergies Water attachées à ce Pokémon.",
		},
		damage: 40
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Cure Shower GX",
			fr: "Pluie Curative-GX",
		},
		text: {
			en: "Heal all damage from all of your Water Pokémon. (You can't use more than 1 GX attack in a game.)",
			fr: "Soignez tous les dégâts de vos Pokémon Water. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.GRASS,
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
