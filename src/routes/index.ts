import {mount, route} from "navi";

import Game from "./game";

export default mount({
	"/": route({
		title: "Home - ProtoHeroes",
		getView: () => import("./home")
	}),
	"/game": Game,
});
