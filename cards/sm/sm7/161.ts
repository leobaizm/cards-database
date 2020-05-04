import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm7-161",
	localId: 161,

	// Card informations
	name: {
		en: "Apricorn Maker",
		fr: "Artisan de Noigrumes",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm7/161/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/161/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm7/161/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm7/161/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Kagemaru Himeno",



	attacks: [{
		name: {},
		text: {
			fr: "Cherchez dans votre deck jusqu’à 2 cartes Objet contenant le mot « Ball » dans leur nom, montrez-les, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
		},
	}],







	rarity: Rarity.ULTRARARE,

	category: Category.TRAINER,

	set: {
		name: "Celestial Storm",
		code: "sm7"
	}
}

export default card
