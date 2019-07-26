import { CardScript } from "../../types/CardScript"
import { cardScripts } from "../../CardScripts"

const cardScript: CardScript = {
	// Play: Take control of an enemy artifact. While under your control, if it does not belong to one of your three houses, it is considered to be of house Shadows.
	power: () =>  2,
	onPlay: {
		perform: (state, config) => {
        //Add onPlay code here
}	},

}

cardScripts.scripts.set("sneklifter", cardScript)