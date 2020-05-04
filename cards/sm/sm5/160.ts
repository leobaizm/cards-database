import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "sm5-160",
	localId: 160,

	// Card informations
	name: {
		en: "Xurkitree-GX",
		fr: "Câblifère-GX",
	},

	hp: 180,

	type: [
		Type.LIGHTNING,
	],

	dexId: 796,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/sm/sm5/160/low",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/160/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/sm/sm5/160/high",
			fr: "https://assets.tcgdex.net/fr/sm/sm5/160/high",
		},
	},

	evolveFrom: {},

	tags: [
		Tag.GX,
	],

	illustrator: "5ban Graphics",

	abilities: [{
		id: 1163,
		type: AbilityType.TALENT,
		name: {
			en: "Flashing Head",
			fr: "Tête Clignotante",
		},
		text: {
			en: "Prevent all damage done to this Pokémon by attacks from your opponent's Pokémon that have any Special Energy attached to them.",
			fr: "Évitez tous les dégâts d’attaque infligés à ce Pokémon par les Pokémon de votre adversaire auxquels est attachée de l’Énergie spéciale.",
		}
	}],

	attacks: [{
		cost: [
			Type.LIGHTNING,
			Type.LIGHTNING,
			Type.COLORLESS
		],
		name: {
			en: "Rumbling Wires",
			fr: "Câbles Grondants",
		},
		text: {
			en: "Discard the top card of your opponent's deck.",
			fr: "Défaussez la première carte du dessus du deck de votre adversaire.",
		},
		damage: 100
	},{
		cost: [
			Type.LIGHTNING
		],
		name: {
			en: "Lighting-GX",
			fr: "Éclair-GX",
		},
		text: {
			en: "Your opponent reveals their hand. Add a card you find there to their Prize cards face down. (You can't use more than 1 GX attack in a game.)",
			fr: "Votre adversaire dévoile sa main. Ajoutez une des cartes que vous y trouvez à ses cartes Récompense, face cachée. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
		},
	}],

	weaknesses: [{
		type: Type.FIGHTING,
		value: "×2"
	}],

	resistances: [{
		type: Type.METAL,
		value: "-20"
	}],

	retreat: 2,

	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Ultra Prism",
		code: "sm5"
	}
}

export default card
