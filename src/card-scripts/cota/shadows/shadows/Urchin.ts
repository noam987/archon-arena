import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// Elusive. (The first time this creature is attacked each turn, no damage is dealt.)Play: Steal 1<A>.
	power: () =>  1,
	elusive: () =>  true,
	onPlay: {
		perform: (state, config) => {
        //Add onPlay code here
}	},

}

cardScripts.scripts.set("urchin", cardScript)