import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "hgss1-101",
	localId: 101,

	// Card informations
	name: {
		en: "Professor Oak's New Theory",
		fr: "Nouvelle théorie du Prof. Chen",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/101/low",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/hgss/hgss1/101/high",
			fr: "https://assets.tcgdex.net/fr/hgss/hgss1/101/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Ken Sugimori",



	attacks: [{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer qu’une carte Supporter à chaque tour. Lorsque vous jouez cette carte, placez-la près de votre Pokémon actif. Une fois votre tour terminé, défaussez-vous de cette carte.",
		},
	},{
		name: {},
		text: {
			fr: "Mélangez votre main dans votre deck. Ensuite, piochez 6 cartes.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "HeartGold & SoulSilver",
		code: "hgss1"
	}
}

export default card
