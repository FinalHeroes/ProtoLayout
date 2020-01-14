import {
	Card,
	CardContent,
	CardHeader,
	createStyles,
	Grid,
	makeStyles,
	Slider,
	Theme,
	Typography
} from "@material-ui/core";
import {createElement, FunctionComponent, useState} from "react";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		content: {
			flexGrow: 1,
			padding: theme.spacing(12),
			backgroundImage: "url('/assets/create-hero-background.jpg')",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			backgroundPosition: "bottom",
			minHeight: "100vh",
		},
		card: {
			height: "100%",
			backgroundColor: "rgba(255, 255, 255, 0.6)"
		}
	}),
);

const CreateHero: FunctionComponent = () => {
	const classes = useStyles();
	const [str, setStr] = useState(1);
	const [dex, setDex] = useState(1);
	const [vit, setVit] = useState(1);
	const [int, setInt] = useState(1);

	return <div className={classes.content}>
		<Card variant="outlined" classes={{root: classes.card}}>
			<CardHeader title="Create your Hero"/>
			<CardContent>
				<Grid container direction="row" spacing={2}>
					<Grid container item lg={6} direction="column" spacing={2}>
						<Grid item lg>
							<Typography gutterBottom>Stat Points Left</Typography>
							<Slider
								color="primary" min={1} max={10} marks disabled
								value={10 - (str - 1) - (dex - 1) - (vit - 1) - (int - 1)}
							/>
						</Grid>
						<Grid item lg>
							<Typography gutterBottom>Strength</Typography>
							<Slider
								min={1} max={6} valueLabelDisplay="auto"
								value={str} marks
								onChange={(e, value) => {
									if (typeof value === "number")
										setStr(value);
								}}
							/>
						</Grid>
						<Grid item lg>
							<Typography gutterBottom>Dexterity</Typography>
							<Slider
								min={1} max={6} valueLabelDisplay="auto"
								value={dex} marks
								onChange={(e, value) => {
									if (typeof value === "number")
										setDex(value);
								}}
							/>
						</Grid>
						<Grid item lg>
							<Typography gutterBottom>Vitality</Typography>
							<Slider
								min={1} max={6} valueLabelDisplay="auto"
								value={vit} marks
								onChange={(e, value) => {
									if (typeof value === "number")
										setVit(value);
								}}
							/>
						</Grid>
						<Grid item lg>
							<Typography gutterBottom>Intellect</Typography>
							<Slider
								min={1} max={6} valueLabelDisplay="auto"
								value={int} marks
								onChange={(e, value) => {
									if (typeof value === "number")
										setInt(value);
								}}
							/>
						</Grid>
					</Grid>
					<Grid container item lg={6} direction="column" spacing={2}>
						<Grid item lg>
							<Typography>Damage</Typography>
						</Grid>
						<Grid item lg>
							<Typography>Health</Typography>
						</Grid>
						<Grid item lg>
							<Typography>Mana</Typography>
						</Grid>
						<Grid item lg>
							<Typography>Dodge Chance</Typography>
						</Grid>
						<Grid item lg>
							<Typography>Critical Chance</Typography>
						</Grid>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	</div>;
};

export default CreateHero;
