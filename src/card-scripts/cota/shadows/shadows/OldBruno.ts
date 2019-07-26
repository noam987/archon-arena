import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// Elusive. (The first time this creature is attacked each turn, no damage is dealt.)Play: Capture 3<A>.
	power: () =>  3,
	elusive: () =>  true,
	onPlay: {
		perform: (state, config) => {
        //Add onPlay code here
}	},

}

cardScripts.scripts.set("old-bruno", cardScript)