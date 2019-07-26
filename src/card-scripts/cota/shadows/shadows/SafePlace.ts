import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// You may spend <A> on Safe Place when forging keys.Action: Move 1<A> from your pool to Safe Place.
	amber: () =>  1,
	action: {
		perform: (state, config) => {
        //Add action code here
}	},

}

cardScripts.scripts.set("safe-place", cardScript)