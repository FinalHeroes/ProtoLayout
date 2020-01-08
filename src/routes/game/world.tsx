import {createElement, Fragment, FunctionComponent, useEffect, useRef} from "react";
import {Card, CardContent, CardHeader, Grid, Typography} from "@material-ui/core";

const World: FunctionComponent = () => {
	let canvas = useRef<HTMLCanvasElement>(null);
	let content = useRef<HTMLDivElement>(null);

	useEffect(() => {
		console.log("Home rendered");
		if (content.current && canvas.current) {
			canvas.current.width = content.current.clientWidth;
		}
	}, []);

	return <Fragment>
		<Grid container alignItems="center" justify="center">
			<Grid item lg={9}>
				<Card raised>
					<CardHeader title="World"/>
					<CardContent ref={content} style={{padding: 0}}>
						<canvas ref={canvas} height={400}/>
					</CardContent>
				</Card>
			</Grid>
		</Grid>
	</Fragment>;
};

export default World;
