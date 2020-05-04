import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'
import path from 'path'
import set from '../../../sets/swsh/swsh1'

const localId = path.basename(__filename).split(".")[0]

const card: Card = {

	// ids
	id: `${set.code}-${localId}`,
	localId: 158,


	// Card informations
	name: {
		en: "Big Charm",
		fr: "Grande Amulette",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/158/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/158/low",
			},


	},



	tags: [
		Tag.TOOL,
	],

	illustrator: "inose yukie",



	effect: {
		en: "The Pokémon this card is attached to gets +30 HP.",
	},




	rarity: Rarity.UNCOMMON, 

	category: Category.TRAINER, 


	set,
}

export default card