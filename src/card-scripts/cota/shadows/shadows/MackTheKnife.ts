import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// Elusive.You may use Mack the Knife as if it belonged to the active house.Action: Deal 1<D> to a creature. If this damage destroys that creature, gain 1<A>.
	power: () =>  3,
	elusive: () =>  true,
	action: {
		perform: (state, config) => {
        //Add action code here
}	},

}

cardScripts.scripts.set("mack-the-knife", cardScript)