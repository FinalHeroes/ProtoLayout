import {mount, redirect, route} from "navi";

export default mount({
	"/home": route({
		title: "Home - ProtoHeroes",
		getView: () => import("./home")
	}),
	"/": redirect("./home")
});
