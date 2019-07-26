import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// The first creature played each turn enters play ready.
	amber: () =>  1,

}

cardScripts.scripts.set("speed-sigil", cardScript)