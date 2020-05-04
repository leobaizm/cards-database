import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm8-13",
	localId: 13,

	// Card informations
	name: {
		en: "Skiploom",
		fr: "Floravol",
	},

	hp: 60,

	type: [
		Type.GRASS,
	],

	dexId: 188,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm8/13/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/13/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm8/13/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm8/13/high",
		},
	},

	evolveFrom: {
		en: "Hoppip",
		fr: "Granivol",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Hitoshi Ariga",

	abilities: [{
		id: 1339,
		type: AbilityType.TALENT,
		name: {
			en: "Floral Path to the Sky",
			fr: "Voie Céleste Fleurie",
		},
		text: {
			en: "Once during your turn (before your attack), you may search your deck for Jumpluff, put this Pokémon and all cards attached to it in the Lost Zone, and put that Jumpluff in its place. Then, shuffle your deck.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez chercher Cotovol dans votre deck, placer ce Pokémon-ci et toutes les cartes qui lui sont attachées dans la Zone Perdue, puis le remplacer par ce Cotovol. Mélangez ensuite votre deck.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS
		],
		name: {
			en: "Tackle",
			fr: "Charge",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.LIGHTNING,
		value: "×2"
	}],

	resistances: [{
		type: Type.FIGHTING,
		value: "-20"
	}],



	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Lost Thunder",
		code: "sm8"
	}
}

export default card
