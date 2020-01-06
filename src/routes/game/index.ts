import {mount, route} from "navi";

export default mount({
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
});
