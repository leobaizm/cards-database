import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy7-85",
	localId: 85,

	// Card informations
	name: {
		en: "M Sceptile-EX",
		fr: "M-Jungko-EX",
	},

	hp: 220,

	type: [
		Type.GRASS,
	],

	dexId: 254,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy7/85/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/85/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy7/85/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy7/85/high",
		},
	},

	evolveFrom: {
		en: "Sceptile-EX",
		fr: "Jungko-EX",
	},

	tags: [
		Tag.MEGA,
	],

	illustrator: "5ban Graphics",



	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Jagged Saber",
			fr: "Stop Θ",
		},
		text: {
			en: "You may attach up to 2 Grass Energy cards from your hand to your Benched Pokémon in any way you like. If you attached Energy to a Pokémon in this way, heal all damage from that Pokémon.",
		},
		damage: 100
	},{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			fr: "Sabre Tranchant",
		},
		text: {
			fr: "Vous pouvez attacher jusqu'à 2 cartes Énergie Grass de votre main à vos Pokémon de Banc, de la manière que vous voulez. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, soignez tous les dégâts au Pokémon choisi.",
		},
		damage: 100
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.ULTRARARE,

	category: Category.POKEMON,

	set: {
		name: "Ancient Origins",
		code: "xy7"
	}
}

export default card
