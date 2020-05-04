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
	localId: 201,


	// Card informations
	name: {
		en: "Professor's Research (Professor Magnolia)",
		fr: "Recherches Professorales (Professeure Magnolia)",
	},



	image: {
			low: {
				en: "https://assets.tcgdex.net/en/swsh/swsh1/201/low",
				fr: "https://assets.tcgdex.net/fr/swsh/swsh1/201/low",
			},


	},



	tags: [
		Tag.SUPPORTER,
	],

	illustrator: "kirisAki",



	effect: {
		en: "Discard your hand and draw 7 cards.",
	},




	rarity: Rarity.ULTRARARE, 

	category: Category.TRAINER, 


	set,
}

export default card