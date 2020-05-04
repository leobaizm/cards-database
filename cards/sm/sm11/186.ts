import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-186",
	localId: 186,

	// Card informations
	name: {
		en: "Blaine's Quiz Show",
		fr: "Série de Quiz d’Auguste",
	},







	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/186/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/186/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/186/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/186/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "Megumi Mizutani",



	attacks: [{
		name: {},
		text: {
			fr: "Placez un Pokémon de votre main devant vous, face cachée, et dites à votre adversaire le nom de l’une de ses attaques. Votre adversaire devine le nom de ce Pokémon, puis vous le retournez. Si votre adversaire a bien deviné, il pioche 4 cartes. S’il a mal deviné, vous piochez 4 cartes. Remettez ce Pokémon dans votre main.",
		},
	}],







	rarity: Rarity.UNCOMMON,

	category: Category.TRAINER,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
