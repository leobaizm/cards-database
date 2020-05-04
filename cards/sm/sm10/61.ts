import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm10-61",
	localId: 61,

	// Card informations
	name: {
		en: "Muk & Alolan Muk-GX",
		fr: "Grotadmorv et Grotadmorv d’Alola-GX",
	},

	hp: 270,

	type: [
		Type.PSYCHIC,
	],

	dexId: 89,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm10/61/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/61/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm10/61/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm10/61/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Severe Poison",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Poisoned. Put 8 damage counters instead of 1 on that Pokémon between turns.",
		},
	},{
		cost: [
			Type.PSYCHIC,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Poison Absorption",
			fr: "Poison Violent",
		},
		text: {
			en: "If your opponent's Active Pokémon is Poisoned, heal 100 damage from this Pokémon.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Placez 8 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour.",
		},
		damage: 120
	},{
		name: {
			en: "Nasty Goo Mix-GX",
			fr: "Absorption de Poison",
		},
		text: {
			en: "Your opponent's Active Pokémon is now Paralyzed and Poisoned. If this Pokémon has at least 4 extra Energy attached to it (in addition to this attack's cost), put 15 damage counters instead of 1 on that Pokémon between turns. (You can't use more than 1 GX attack in a game.)",
			fr: "Si le Pokémon Actif de votre adversaire est Empoisonné, soignez 100 dégâts à ce Pokémon.",
		},
		damage: 120
	},{
		name: {
			fr: "Mixture de Glu Fétide-GX",
		},
		text: {
			fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné et Paralysé. Si au moins 4 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), placez 15 marqueurs de dégâts au lieu d’un sur le Pokémon ciblé entre chaque tour. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],



	retreat: 4,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unbroken Bonds",
		code: "sm10"
	}
}

export default card
