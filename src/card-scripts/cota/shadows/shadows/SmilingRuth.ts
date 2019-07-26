import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// Elusive. (The first time this creature is attacked each turn, no damage is dealt.)Reap: If you forged a key this turn, take control of an enemy flank creature.
	power: () =>  1,
	elusive: () =>  true,
	reap: {
		perform: (state, config) => {
        //Add reap code here
}	},

}

cardScripts.scripts.set("smiling-ruth", cardScript)