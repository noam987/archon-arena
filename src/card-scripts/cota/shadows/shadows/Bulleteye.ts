import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// Elusive. (The first time this creature is attacked each turn, no damage is dealt.)Reap: Destroy a flank creature.
	power: () =>  2,
	elusive: () =>  true,
	reap: {
		perform: (state, config) => {
        //Add reap code here
}	},

}

cardScripts.scripts.set("bulleteye", cardScript)