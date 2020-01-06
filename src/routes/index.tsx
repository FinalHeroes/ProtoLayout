import {compose, mount, redirect, route, withView} from "navi";
import {createElement} from "react";
import {View} from "react-navi";

import {GameLayout} from "../layout";

export default mount({
	"/home": route({
		title: "Home - ProtoHeroes",
		getView: () => import("./home")
	}),
	"/world": compose(
		withView(() => <GameLayout><View/></GameLayout>),
		route({
			title: "World - ProtoHeroes",
			getView: () => import("./world")
		})
	),
	"/hero": compose(
		withView(() => <GameLayout><View/></GameLayout>),
		route({
			title: "Hero - ProtoHeroes",
			getView: () => import("./hero")
		})
	),
	"/social": compose(
		withView(() => <GameLayout><View/></GameLayout>),
		route({
			title: "Social - ProtoHeroes",
			getView: () => import("./social")
		})
	),
	"/": redirect("./home")
});
