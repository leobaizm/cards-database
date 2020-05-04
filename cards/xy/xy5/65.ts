import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "xy5-65",
	localId: 65,

	// Card informations
	name: {
		en: "Eelektross",
		fr: "Ohmassacre",
	},

	hp: 140,

	type: [
		Type.LIGHTNING,
	],

	dexId: 604,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/xy/xy5/65/low",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/65/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/xy/xy5/65/high",
			fr: "https://assets.tcgdex.net/fr/xy/xy5/65/high",
		},
	},

	evolveFrom: {
		en: "Eelektrik",
		fr: "Lampéroie",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Mitsuhiro Arita",

	abilities: [{
		id: 244,
		type: AbilityType.TALENT,
		name: {
			en: "Energy Connect",
			fr: "Connexion d'Énergie",
		},
		text: {
			en: "As often as you like during your turn (before your attack), you may move a basic Energy attached to 1 of your Benched Pokémon to your Active Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour (avant votre attaque), vous pouvez déplacer une Énergie de base attachée à l'un de vos Pokémon de Banc vers votre Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Electricannon",
			fr: "Canon Électrique",
		},
		text: {
			en: "You may discard all Lightning Energy attached to this Pokémon. If you do, this attack does 50 more damage.",
			fr: "Vous pouvez défausser toutes les Énergies Lightning attachées à ce Pokémon. Dans ce cas, cette attaque inflige 50 dégâts supplémentaires.",
		},
		damage: 80
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
		name: "Primal Clash",
		code: "xy5"
	}
}

export default card
