import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "bw4-101",
	localId: 101,

	// Card informations
	name: {
		en: "Chandelure",
		fr: "Lugulabre",
	},

	hp: 130,

	type: [
		Type.PSYCHIC,
	],

	dexId: 609,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/bw/bw4/101/low",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/101/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/bw/bw4/101/high",
			fr: "https://assets.tcgdex.net/fr/bw/bw4/101/high",
		},
	},

	evolveFrom: {
		en: "Lampent",
		fr: "Mélancolux",
	},

	tags: [
		Tag.STAGE2,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 449,
		type: AbilityType.TALENT,
		name: {
			en: "Cursed Shadow",
			fr: "Ombre Maudite",
		},
		text: {
			en: "Once during your turn (before your attack), if this Pokémon is your Active Pokémon, you may put 3 damage counters on your opponent's Pokémon in any way you like.",
			fr: "Une seule fois pendant votre tour (avant votre attaque), si ce Pokémon est votre Pokémon Actif, vous pouvez placer 3 marqueurs de dégâts sur les Pokémon de votre adversaire, de la manière que vous voulez.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.PSYCHIC,
			Type.COLORLESS
		],
		name: {
			en: "Eerie Glow",
			fr: "Lueur Sinistre",
		},
		text: {
			en: "The Defending Pokémon is now Burned and Confused.",
			fr: "Le Pokémon Défenseur est maintenant Brûlé et Confus.",
		},
		damage: 50
	}],

	weaknesses: [{
		type: Type.DARKNESS,
		value: "×2"
	}],



	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Next Destinies",
		code: "bw4"
	}
}

export default card
