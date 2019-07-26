import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// This creature gains, “Reap: Deal 4<D> to a flank creature.”
	amber: () =>  1,
	reap: {
		perform: (state, config) => {
        //Add reap code here
}	},

}

cardScripts.scripts.set("silent-dagger", cardScript)