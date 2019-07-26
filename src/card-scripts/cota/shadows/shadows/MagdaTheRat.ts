import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// Elusive. (The first time this creature is attacked each turn, no damage is dealt.)Play: Steal 2<A>.Leaves Play: Your opponent steals 2<A>.
	power: () =>  4,
	elusive: () =>  true,
	onPlay: {
		perform: (state, config) => {
        //Add onPlay code here
}	},

}

cardScripts.scripts.set("magda-the-rat", cardScript)