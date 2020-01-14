import {Card, CardContent, CardHeader, createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";
import {createElement, FunctionComponent} from "react";

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

	return <div className={classes.content}>
		<Card variant="outlined" classes={{root: classes.card}}>
			<CardHeader title="Create your Hero"/>
			<CardContent>
				<Grid container direction="row" spacing={2}>
					<Grid container item lg={6} direction="column" spacing={2}>
						<Grid item lg>
							<Typography>Stat Points Left</Typography>
						</Grid>
						<Grid item lg>
							<Typography>Strength</Typography>
						</Grid>
						<Grid item lg>
							<Typography>Dexterity</Typography>
						</Grid>
						<Grid item lg>
							<Typography>Vitality</Typography>
						</Grid>
						<Grid item lg>
							<Typography>Intellect</Typography>
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
