import {createElement, Fragment, FunctionComponent, useEffect, useRef} from "react";
import {Card, CardContent, CardHeader, Grid, Typography} from "@material-ui/core";

const World: FunctionComponent = () => {
	let canvas = useRef<HTMLCanvasElement>(null);

	const render = (canvas: HTMLCanvasElement) => {
		const rect = canvas.getBoundingClientRect();
		canvas.width = rect.width;
		canvas.height = rect.height;

		const ctx = canvas.getContext("2d");
		if (ctx) {
			ctx.clearRect(0, 0, rect.width, rect.height);
			ctx.strokeStyle = "black";
			ctx.lineWidth = 1;

			for (let y = 0; y < 32; ++y) {
				for (let x = 0; x < 40; ++x) {
					ctx.strokeRect(x * 32, y * 32, 32, 32);
				}
			}
		}
	};

	const onResize = () => {
		if (canvas.current) {
			render(canvas.current);
		}
	};

	useEffect(() => {
		console.log("Home rendered");
		if (canvas.current) {
			render(canvas.current);

			window.addEventListener("resize", onResize);
			return () => window.removeEventListener("resize", onResize);
		}

		return () => {};
	}, []);

	return <Fragment>
		<Grid container alignItems="center" justify="center">
			<Grid item lg={9}>
				<Card raised>
					<CardHeader title="World"/>
					<CardContent style={{padding: 0}}>
						<canvas ref={canvas} style={{width: "100%", height: 400}}/>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	</Fragment>;
};

export default World;
