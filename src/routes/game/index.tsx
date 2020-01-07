import {compose, mount, route, withView} from "navi";
import {createElement} from "react";
import {View} from "react-navi";

import {GameLayout} from "./layout";

export default compose(
	withView(() => <GameLayout>
		<View/>
	</GameLayout>),
	mount({
		"/": route({
			title: "World - ProtoHeroes",
			getView: () => import("./world"),
		}),
		"/hero": route({
			title: "Hero - ProtoHeroes",
			getView: () => import("./hero"),
		}),
		"/social": route({
			title: "Social - ProtoHeroes",
			getView: () => import("./social"),
		}),
	}),
);
