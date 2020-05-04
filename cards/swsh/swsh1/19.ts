import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "swsh1-19",
	localId: 19,

	// Card informations
	name: {
		en: "Orbeetle",
		fr: "Astronelle",
	},

	hp: 130,

	type: [
		Type.GRASS,
	],



	image: {
		low: {
			en: "https://assets.tcgdex.net/en/swsh/swsh1/19/low",
			fr: "https://assets.tcgdex.net/fr/swsh/swsh1/19/low",
		}
	},

	evolveFrom: {
		en: "Dottler",
		fr: "Coléodôme",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Hitoshi Ariga",

	abilities: [{
		id: 2,
		type: AbilityType.TALENT,
		name: {
			en: "Bug’s Radar",
			fr: "Radar d’Insecte",
		},
		text: {
			en: "Once during your turn, you may look at the top 3 cards of your opponent’s deck and put them back in any order.",
			fr: "Une fois pendant votre tour, vous pouvez regarder les 3 cartes du dessus du deck de votre adversaire, puis les replacer dans l’ordre désiré.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS
		],
		name: {
			en: "Brainwave",
			fr: "Onde Cérébrale",
		},
		text: {
			en: "This attack does 30 more damage for each Psychic Energy attached to this Pokémon.",
			fr: "Cette attaque inflige 30 dégâts supplémentaires pour chaque Énergie Psychic attachée à ce Pokémon.",
		},
		damage: "90+"
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 1,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Sword & Shield",
		code: "swsh1"
	}
}

export default card
