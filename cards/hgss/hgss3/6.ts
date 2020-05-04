import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss3-6",
	localId: 6,

	// Card informations
	name: {
		en: "Magcargo",
		fr: "Volcaropod",
	},

	hp: 100,

	type: [
		Type.FIRE,
	],

	dexId: 219,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/6/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/6/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss3/6/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss3/6/high",
		},
	},

	evolveFrom: {
		en: "Slugma",
		fr: "Limagma",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Yuka Morii",



	attacks: [{
		cost: [
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Searing Flame",
			fr: "Flammes calcinantes",
		},
		text: {
			en: "The Defending Pokémon is now Burned.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé.",
		},
		damage: 20
	},{
		cost: [
			Type.FIRE,
			Type.FIRE,
			Type.COLORLESS
		],
		name: {
			en: "Lava Flow",
			fr: "Torrent de lave",
		},
		text: {
			en: "You may discard any number of Fire Energy cards attached to Magcargo. If you do, this attack does 60 damage plus 20 damage for each Fire Energy card you discarded.",
			fr: "Vous pouvez défausser autant de cartes Énergie Fire attachées à Volcaropod que vous le souhaitez. Dans ce cas, cette attaque inflige 60 dégâts plus 20 dégâts pour chaque carte Énergie Fire que vous avez défaussée.",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.WATER,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "HS—Undaunted",
		code: "hgss3"
	}
}

export default card
