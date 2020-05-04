import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "dp7-32",
	localId: 32,

	// Card informations
	name: {
		en: "Bibarel",
		fr: "Bibarel",
	},

	hp: 100,

	type: [
		Type.WATER,
	],

	dexId: 400,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/dp/dp7/32/low",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/32/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/dp/dp7/32/high",
			fr: "https://assets.tcgdex.net/fr/dp/dp7/32/high",
		},
	},

	evolveFrom: {
		en: "Bidoof",
		fr: "Keunotor",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Kouki Saitou",

	abilities: [{
		id: 1071,
		type: AbilityType.POKEBODY,
		name: {
			en: "Unaware",
			fr: "Inconscient",
		},
		text: {
			en: "Prevent all effects of attacks, excluding damage, done to Bibarel.",
			fr: "Prévenez tous les effets d'attaques, dégâts exclus, infligés à Castorno.",
		}
	}],

	attacks: [{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Amnesia",
			fr: "Amnésie",
		},
		text: {
			en: "Choose 1 of the Defending Pokémon's attacks. That Pokémon can't use that attack during your opponent's next turn.",
			fr: "Choisissez 1 des attaques du Pokémon Défenseur. Ce Pokémon ne peut pas utiliser cette attaque lors du prochain tour de votre adversaire.",
		},
		damage: 20
	},{
		cost: [
			Type.WATER,
			Type.WATER
		],
		name: {
			en: "Surf",
			fr: "Surf",
		},
		damage: 60
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "+30"
	}],



	retreat: 3,

	rarity: Rarity.UNCOMMON,

	category: Category.POKEMON,

	set: {
		name: "Stormfront",
		code: "dp7"
	}
}

export default card
