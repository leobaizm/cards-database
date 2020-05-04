import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bwp-BW91",
	localId: "BW91",

	// Card informations
	name: {
		en: "Jolteon",
		fr: "Voltali",
	},

	hp: 90,

	type: [
		Type.LIGHTNING,
	],

	dexId: 135,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW91/low",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW91/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bwp/BW91/high",
			fr: "https://assets.tcgdex.net/fr/bw/bwp/BW91/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
		fr: "Évoli",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Illus.＆Direc.The Pokémon Company Art Team",



	attacks: [{
		cost: [
			Type.COLORLESS
		],
		name: {
			en: "Electrigun",
			fr: "Pistolectrique",
		},
		text: {
			en: "You may discard a Lightning Energy attached to this Pokémon. If you do, this attack does 40 more damage.",
			fr: "Vous pouvez défausser une Énergie Lightning attachée à ce Pokémon. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 20
	},{
		cost: [
			Type.LIGHTNING,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Pin Missile",
			fr: "Dard-Nuée",
		},
		text: {
			en: "Flip 4 coins. This attack does 40 damage times the number of heads.",
			fr: "Lancez 4 pièces. Cette attaque inflige 40 dégâts multipliés par le nombre de côtés face.",
		},
		damage: 40
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],





	rarity: Rarity.COMMON,

	category: Category.POKEMON,

	set: {
		name: "BW Black Star Promos",
		code: "bwp"
	}
}

export default card
