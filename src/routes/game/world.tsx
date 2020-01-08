import {createElement, Fragment, FunctionComponent, MouseEvent, useEffect, useRef, useState} from "react";
import {Card, CardContent, CardHeader, Grid, Typography} from "@material-ui/core";

const World: FunctionComponent = () => {
	let canvas = useRef<HTMLCanvasElement>(null);
	const [zoom, setZoom] = useState(1.0);
	const [offsetX, setOffsetX] = useState(0);
	const [offsetY, setOffsetY] = useState(0);
	const [dragging, setDragging] = useState(false);

	const render = (canvas: HTMLCanvasElement) => {
		const rect = canvas.getBoundingClientRect();
		canvas.width = rect.width;
		canvas.height = rect.height;

		const ctx = canvas.getContext("2d");
		if (ctx) {
			ctx.clearRect(0, 0, rect.width, rect.height);

			ctx.save();
			ctx.scale(zoom, zoom);
			ctx.translate(offsetX, offsetY);

			ctx.beginPath();
			for (let y = 0; y < 32; ++y) {
				for (let x = 0; x < 40; ++x) {
					ctx.rect(x * 32, y * 32, 32, 32);
				}
			}

			ctx.strokeStyle = "black";
			ctx.lineWidth = 0.5;
			ctx.stroke();
			ctx.restore();
		}
	};

	const mouseDown = (e: MouseEvent<HTMLCanvasElement>) => {
		if (e.button === 0 && e.ctrlKey) {
			setDragging(true);
			console.log("Dragging started");
		}
	};

	const mouseUp = (e: MouseEvent<HTMLCanvasElement>) => {
		if (e.button === 0 && e.ctrlKey) {
			setDragging(false);
			console.log("Dragging ended");
		}
	};

	const mouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
		if (e.button === 0 && e.ctrlKey && canvas.current && dragging) {
			setOffsetX(offsetX + e.movementX);
			setOffsetY(offsetY + e.movementY);
			render(canvas.current);
		}
	};

	const click =  (e: MouseEvent<HTMLCanvasElement>) => {
		e.preventDefault();
		if (e.button === 0 && !e.ctrlKey && !dragging) {
			console.log("CLICKED!");
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
						<canvas ref={canvas} style={{width: "100%", height: 400}}
						        onMouseLeave={() => setDragging(false)} onClick={click}
						        onMouseDown={mouseDown} onMouseUp={mouseUp} onMouseMove={mouseMove}
						/>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	</Fragment>;
};

export default World;
