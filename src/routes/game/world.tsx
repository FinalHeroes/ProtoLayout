import {createElement, Fragment, FunctionComponent, MouseEvent, useEffect, useRef, useState} from "react";
import {
	Card,
	CardContent,
	CardHeader,
	createStyles,
	FormControlLabel,
	FormGroup,
	Grid,
	makeStyles,
	Mark,
	Slider,
	Switch,
	Theme
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		zoomLabel: {
			marginRight: 25,
		},
		zoomGroup: {
			width: 240,
			marginRight: 20,
		},
		mapCard: {
			padding: 0,
			["&:last-child"]: {
				paddingBottom: 0,
			},
		},
		canvas: {
			width: "100%",
			height: 400,
		},
	}),
);

const World: FunctionComponent = () => {
	let canvas = useRef<HTMLCanvasElement>(null);
	const classes = useStyles();
	const [zoom, setZoom] = useState(1.0);
	const [offsetX, setOffsetX] = useState(0);
	const [offsetY, setOffsetY] = useState(0);
	const [dragging, setDragging] = useState(false);
	const [navMode, setNavMode] = useState(false);

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
		if (e.button === 0 && navMode) {
			setDragging(true);
			console.log("Dragging started");
		}
	};

	const mouseUp = (e: MouseEvent<HTMLCanvasElement>) => {
		if (e.button === 0 && navMode) {
			setDragging(false);
			console.log("Dragging ended");
		}
	};

	const mouseMove = (e: MouseEvent<HTMLCanvasElement>) => {
		if (e.button === 0 && navMode && canvas.current && dragging) {
			setOffsetX(offsetX + e.movementX);
			setOffsetY(offsetY + e.movementY);
			render(canvas.current);
		}
	};

	const click = (e: MouseEvent<HTMLCanvasElement>) => {
		e.preventDefault();
		if (e.button === 0 && !navMode && !dragging) {
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

	const marks: Mark[] = [
		{value: 0.5, label: "50%"},
		{value: 1.0, label: "100%"},
		{value: 1.5, label: "150%"},
	];

	return <Fragment>
		<Grid container alignItems="center" justify="center">
			<Grid item lg={9}>
				<Card raised>
					<CardHeader title="World" action={
						<FormGroup row>
							<FormControlLabel label="Zoom" labelPlacement="start"
							                  classes={{root: classes.zoomGroup, label: classes.zoomLabel}}
							                  control={
								                  <Slider
									                  color="secondary"
									                  min={0.5}
									                  max={1.5}
									                  step={0.1}
									                  marks={marks}
									                  valueLabelDisplay="off"
									                  value={zoom}
									                  onChange={(e, value) => {
										                  if (typeof value === "number" && canvas.current) {
											                  setZoom(value);
											                  render(canvas.current);
										                  }
									                  }}
								                  />
							                  }
							/>
							<FormControlLabel
								label="Navigation Mode"
								labelPlacement="start"
								control={
									<Switch
										color="secondary"
										value={navMode}
										onChange={e => {
											setNavMode(e.target.checked);
											setDragging(false);
										}}
									/>}
							/>
						</FormGroup>
					}
					/>
					<CardContent classes={{root: classes.mapCard}}>
						<canvas ref={canvas} className={classes.canvas}
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
