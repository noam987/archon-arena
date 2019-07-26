import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// This creature gains elusive and skirmish.
	amber: () =>  1,

}

cardScripts.scripts.set("ring-of-invisibility", cardScript)