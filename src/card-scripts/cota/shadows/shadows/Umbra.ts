import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// Skirmish. (When you use this creature to fight, it is dealt no damage in return.)Fight: Steal 1<A>.
	power: () =>  2,
	skirmish: () =>  true,
	fight: {
		perform: (state, config) => {
        //Add fight code here
}	},

}

cardScripts.scripts.set("umbra", cardScript)