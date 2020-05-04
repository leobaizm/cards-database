import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm12-249",
	localId: 249,

	// Card informations
	name: {
		en: "Venusaur & Snivy-GX",
		fr: "Florizarre et Vipélierre-GX",
	},

	hp: 270,

	type: [
		Type.GRASS,
	],

	dexId: 3,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm12/249/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/249/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm12/249/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm12/249/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.TAGTEAM,
		Tag.BASIC,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1370,
		type: AbilityType.TALENT,
		name: {
			en: "Shining Vine",
			fr: "Liane Étincelante",
		},
		text: {
			en: "Once during your turn, if this Pokémon is your Active Pokémon, when you attach a {G} Energy card from your hand to it, you may switch 1 of your opponent's Benched Pokémon with their Active Pokémon.",
			fr: "Une seule fois pendant votre tour, si ce Pokémon est votre Pokémon Actif, lorsque vous lui attachez une carte Énergie Grass de votre main, vous pouvez échanger l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
		}
	}],

	attacks: [{
		cost: [
			Type.GRASS,
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Forest Dump",
			fr: "Règle des ESCOUADES",
		},
		damage: 160
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			en: "Solar Plant GX",
			fr: "Rejet Forestier",
		},
		text: {
			en: "This attack does 50 damage to each of your opponent's Pokémon. If this Pokémon has at least 2 extra Energy attached to it (in addition to this attack's cost), heal all damage from all of your Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 GX attack in a game.)",
		},
		damage: 160
	},{
		cost: [
			Type.COLORLESS,
			Type.COLORLESS,
			Type.COLORLESS
		],
		name: {
			fr: "Plante Solaire-GX",
		},
		text: {
			fr: "Cette attaque inflige 50 dégâts à chacun des Pokémon de votre adversaire. Si au moins 2 Énergies supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), soignez tous les dégâts de vos Pokémon. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.) (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIRE,
		value: "×2"
	}],



	retreat: 3,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Cosmic Eclipse",
		code: "sm12"
	}
}

export default card
