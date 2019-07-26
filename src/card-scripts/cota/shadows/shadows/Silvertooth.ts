import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// Silvertooth enters play ready.
	power: () =>  2,

}

cardScripts.scripts.set("silvertooth", cardScript)