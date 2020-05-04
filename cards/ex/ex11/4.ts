import Card from '@tcgdex/sdk/interfaces/Card'
import Type from '@tcgdex/sdk/interfaces/Type'
import Tag from '@tcgdex/sdk/interfaces/Tag'
import Rarity from '@tcgdex/sdk/interfaces/Rarity'
import AbilityType from '@tcgdex/sdk/interfaces/AbilityType'
import Category from '@tcgdex/sdk/interfaces/Category'

const card: Card = {

	// ids
	id: "ex11-4",
	localId: 4,

	// Card informations
	name: {
		en: "Espeon δ",
	},

	hp: 70,

	type: [
		Type.PSYCHIC,
		Type.METAL,
	],

	dexId: 196,

	image: {
		low: {
			en: "https://assets.tcgdex.net/en/ex/ex11/4/low",
		},
		high: {
			en: "https://assets.tcgdex.net/en/ex/ex11/4/high",
		},
	},

	evolveFrom: {
		en: "Eevee",
	},

	tags: [
		Tag.STAGE1,
	],

	illustrator: "Ryo Ueda",

	abilities: [{
		id: 950,
		type: AbilityType.POKEPOWER,
		name: {
			en: "Delta Heal",
		},
		text: {
			en: "Once during your turn (before your attack), you may remove 1 damage counter from each of your Pokémon that has δ on its card. You can't use more than 1 Delta Heal Poké-Power each turn. This power can't be used if Espeon is affected by a Special Condition.",
		}
	}],

	attacks: [{
		cost: [
			Type.PSYCHIC,
			Type.METAL
		],
		name: {
			en: "Psyshock",
		},
		text: {
			en: "Flip a coin. If heads, the Defending Pokémon is now Paralyzed.",
		},
		damage: 30
	}],

	weaknesses: [{
		type: Type.PSYCHIC,
		value: "×2"
	}],





	rarity: Rarity.RARE,

	category: Category.POKEMON,

	set: {
		name: "Delta Species",
		code: "ex11"
	}
}

export default card
