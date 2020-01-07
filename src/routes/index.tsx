import {compose, mount, route, withView} from "navi";
import {createElement} from "react";
import {View} from "react-navi";

import {GameLayout} from "./game/layout";
import Game from "./game";

export default mount({
	"/": route({
		title: "Home - ProtoHeroes",
		getView: () => import("./home")
	}),
	"/game": compose(
		withView(() => <GameLayout><View/></GameLayout>),
		Game,
	),
});
