import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// Omni: Sacrifice Longfused Mines. Deal 3<D> to each enemy creature not on a flank.
	amber: () =>  1,
	omni: {
		perform: (state, config) => {
        //Add omni code here
}	},

}

cardScripts.scripts.set("longfused-mines", cardScript)