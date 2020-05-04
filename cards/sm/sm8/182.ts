import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-182",
	localId: 182,

	// Card informations
	name: {
		en: "Lusamine ◇",
		fr: "Elsa-Mina ",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/182/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/182/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/182/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/182/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "nagimiso",



	attacks: [{
		name: {
			fr: "Règle pour les cartes  (Prisme Étoile)",
		},
	},{
		name: {},
		text: {
			fr: "Vous ne pouvez jouer cette carte que s’il reste exactement 3 cartes Récompense à votre adversaire.\n\nÉvitez tous les dégâts infligés à vos Ultra-Chimères par des attaques pendant le prochain tour de votre adversaire.",
		},
	}],







	rarity: Rarity.RARE,

	category: Category.TRAINER,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
