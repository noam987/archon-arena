import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// Play: Purge each friendly Shadows creature. Steal 1<A> for each creature purged this way.
	amber: () =>  1,
	onPlay: {
		perform: (state, config) => {
        //Add onPlay code here
}	},

}

cardScripts.scripts.set("one-last-job", cardScript)