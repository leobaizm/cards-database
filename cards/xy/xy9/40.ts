import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy9-40",
	localId: 40,

	// Card informations
	name: {
		en: "Greninja",
		fr: "Amphinobi",
	},

	hp: 130,

	type: [
		Type.WATER,
	],

	dexId: 658,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy9/40/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/40/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy9/40/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy9/40/high",
		},
	},

	evolveFrom: {
		en: "Frogadier",
		fr: "Croâporal",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Naoki Saito",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Shadow Stitching",
			fr: "Ombre Suture",
		},
		text: {
			en: "Until the end of your opponent's next turn, each Pokémon your opponent has in play, in his or her hand, and in his or her discard pile has no Abilities. (This includes cards that come into play on that turn.)",
			fr: "Jusqu'à la fin du prochain tour de votre adversaire, chacun des Pokémon de votre adversaire en jeu, dans sa main et dans sa pile de défausse, n'a pas de talent. (Cela comprend les cartes qui sont en jeu pendant ce tour.)",
		},
		damage: 40
	},{
		cost: [
			Type.WATER
		],
		name: {
			en: "Moonlight Slash",
			fr: "Tranch'Lune",
		},
		text: {
			en: "You may return a Water Energy from this Pokémon to your hand. If you do, this attack does 20 more damage.",
			fr: "Vous pouvez reprendre une Énergie Water de ce Pokémon dans votre main. Dans ce cas, cette attaque inflige 20 dégâts supplémentaires.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "BREAKpoint",
		code: "xy9"
	}
}

export default card
