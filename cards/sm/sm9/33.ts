import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-33",
	localId: 33,

	// Card informations
	name: {
		en: "Pikachu & Zekrom-GX",
		fr: "Pikachu et Zekrom-GX",
	},

	hp: 240,

	type: [
		Type.LIGHTNING,
	],

	dexId: 25,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/33/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/33/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/33/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/33/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "Mitsuhiro Arita",



	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Full Blitz",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "Search your deck for up to 3 Lightning Energy cards and attach them to 1 of your Pokémon. Then, shuffle your deck.",
		},
		damage: 150
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			en: "Tag Bolt-GX",
			fr: "Attaque Absolue",
		},
		text: {
			en: "If this Pokémon has at least 3 extra Lightning Energy attached to it (in addition to this attack's cost), this attack does 170 damage to 1 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
			fr: "Cherchez jusqu’à 3 cartes Énergie Lightning dans votre deck et attachez-les à l’un de vos Pokémon. Mélangez ensuite votre deck.",
		},
		damage: 200
	},{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.LIGHTNING
		],
		name: {
			fr: "Escouade Foudroyante-GX",
		},
		text: {
			fr: "Si au moins 3 Énergies Lightning supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 170 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
		damage: 200
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
