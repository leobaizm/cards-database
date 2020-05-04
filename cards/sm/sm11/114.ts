import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm11-114",
	localId: 114,

	// Card informations
	name: {
		en: "Garchomp",
		fr: "Carchacrok",
	},

	hp: 150,

	type: [
		Type.FIGHTING,
	],

	dexId: 445,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm11/114/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/114/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm11/114/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm11/114/high",
		},
	},

	evolveFrom: {
		en: "Gabite",
		fr: "Carmache",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "Akira Komayama",

	abilities: [{
		id: 928,
		type: AbilityType.TALENT,
		name: {
			en: "Avenging Aura",
			fr: "Aura Vengeresse",
		},
		text: {
			en: "If you have more Prize cards remaining than your opponent, this Pokémon's attacks do 80 more damage to your opponent's Active Pokémon (before applying Weakness and Resistance).",
			fr: "S’il vous reste plus de cartes Récompense qu’à votre adversaire, les attaques de ce Pokémon infligent 80 dégâts supplémentaires au Pokémon Actif de votre adversaire (avant application de la Faiblesse et de la Résistance).",
		}
	}],

	attacks: [{
		cost: [
			Type.FIGHTING,
			Type.COLORLESS
		],
		name: {
			en: "Over Slice",
			fr: "Coupure Excessive",
		},
		text: {
			en: "You may discard an Energy from this Pokémon. If you do, this attack does 40 more damage.",
			fr: "Vous pouvez défausser une Énergie attachée à ce Pokémon. Dans ce cas, cette attaque inflige 40 dégâts supplémentaires.",
		},
		damage: 80
	}],

	weaknesses: [{
		type: Type.GRASS,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Unified Minds",
		code: "sm11"
	}
}

export default card
