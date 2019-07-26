import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// Elusive. (The first time this creature is attacked each turn, no damage is dealt.)Action: Steal 1<A>.
	power: () =>  2,
	elusive: () =>  true,
	action: {
		perform: (state, config) => {
        //Add action code here
}	},

}

cardScripts.scripts.set("noddy-the-thief", cardScript)