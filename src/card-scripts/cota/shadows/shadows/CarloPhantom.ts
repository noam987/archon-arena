import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// Elusive. Skirmish.Each time you play an artifact, steal 1<A>.
	power: () =>  1,
	elusive: () =>  true,
	skirmish: () =>  true,

}

cardScripts.scripts.set("carlo-phantom", cardScript)