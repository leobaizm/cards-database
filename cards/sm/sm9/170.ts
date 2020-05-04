import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm9-170",
	localId: 170,

	// Card informations
	name: {
		en: "Latias & Latios-GX",
		fr: "Latias et Latios-GX",
	},

	hp: 250,

	type: [
		Type.DRAGON,
	],

	dexId: 380,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm9/170/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/170/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm9/170/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm9/170/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
	],

	illustrator: "Sanosuke Sakuma",



	attacks: [{
		cost: [
			Type.WATER,
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Buster Purge",
			fr: "Règle des ESCOUADES",
		},
		text: {
			en: "Discard 3 Energy from this Pokémon.",
		},
		damage: 240
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			en: "Aero Unit-GX",
			fr: "Écrase-Éclat",
		},
		text: {
			en: "Attach 5 basic Energy cards from your discard pile to your Pokémon in any way you like. If this Pokémon has at least 1 extra Energy attached to it (in addition to this attack's cost), prevent all effects of attacks, including damage, done to it during your opponent's next turn. (You can't use more than 1 GX attack in a game.)",
			fr: "Défaussez 3 Énergies de ce Pokémon.",
		},
		damage: 240
	},{
		cost: [
			Type.PSYCHIC
		],
		name: {
			fr: "Unité Aérienne-GX",
		},
		text: {
			fr: "Attachez 5 cartes Énergie de base de votre pile de défausse à vos Pokémon, de la manière que vous voulez. Si au moins une Énergie supplémentaire est attachée à ce Pokémon (en plus du coût de cette attaque), évitez tous les effets d’attaques, y compris les dégâts, qui lui sont infligés pendant le prochain tour de votre adversaire. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FAIRY,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Team Up",
		code: "sm9"
	}
}

export default card
