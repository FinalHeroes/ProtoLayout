import {
	Button,
	ButtonGroup,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	createStyles,
	Grid,
	makeStyles,
	Theme,
	Typography
} from "@material-ui/core";
import {createElement, FunctionComponent, useState} from "react";
import {AddSharp, RemoveSharp} from "@material-ui/icons";
import {useNavigation} from "react-navi";

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
			position: "relative",
			height: "100%",
			backgroundColor: "rgba(255, 255, 255, 0.65)",
		},
	}),
);

const CreateHero: FunctionComponent = () => {
	const classes = useStyles();
	const nav = useNavigation();
	const [str, setStr] = useState(10);
	const [dex, setDex] = useState(10);
	const [vit, setVit] = useState(10);
	const [int, setInt] = useState(10);

	const getPointsLeft = () => 10 - (str - 10) - (dex - 10) - (vit - 10) - (int - 10);

	return <div className={classes.content}>
		<Card variant="outlined" classes={{root: classes.card}}>
			<CardHeader title="Create your Hero"/>
			<CardContent>
				<Grid container direction="row" spacing={2}>
					<Grid container item lg={3} direction="column" spacing={4}>
						<Grid item lg>
							<Typography gutterBottom>Stat Points Left : {getPointsLeft()}</Typography>
						</Grid>
						<Grid item lg>
							<Typography variant="caption" gutterBottom>Strength</Typography>
							<ButtonGroup variant="contained" color="primary" fullWidth>
								<Button onClick={() => setStr(str - 1)} disabled={str === 10}>
									<RemoveSharp/>
								</Button>
								<Button disabled style={{color: "black"}}>
									{str}
								</Button>
								<Button onClick={() => setStr(str + 1)} disabled={getPointsLeft() === 0}>
									<AddSharp/>
								</Button>
							</ButtonGroup>
						</Grid>
						<Grid item lg>
							<Typography variant="caption" gutterBottom>Dexterity</Typography>
							<ButtonGroup variant="contained" color="primary" fullWidth>
								<Button onClick={() => setDex(dex - 1)} disabled={dex === 10}>
									<RemoveSharp/>
								</Button>
								<Button disabled style={{color: "black"}}>
									{dex}
								</Button>
								<Button onClick={() => setDex(dex + 1)} disabled={getPointsLeft() === 0}>
									<AddSharp/>
								</Button>
							</ButtonGroup>
						</Grid>
						<Grid item lg>
							<Typography variant="caption" gutterBottom>Vitality</Typography>
							<ButtonGroup variant="contained" color="primary" fullWidth>
								<Button onClick={() => setVit(vit - 1)} disabled={vit === 10}>
									<RemoveSharp/>
								</Button>
								<Button disabled style={{color: "black"}}>
									{vit}
								</Button>
								<Button onClick={() => setVit(vit + 1)} disabled={getPointsLeft() === 0}>
									<AddSharp/>
								</Button>
							</ButtonGroup>
						</Grid>
						<Grid item lg>
							<Typography variant="caption" gutterBottom>Intellect</Typography>
							<ButtonGroup variant="contained" color="primary" fullWidth>
								<Button onClick={() => setInt(int - 1)} disabled={int === 10}>
									<RemoveSharp/>
								</Button>
								<Button disabled style={{color: "black"}}>
									{int}
								</Button>
								<Button onClick={() => setInt(int + 1)} disabled={getPointsLeft() === 0}>
									<AddSharp/>
								</Button>
							</ButtonGroup>
						</Grid>
					</Grid>
					<Grid item lg={6}>
					</Grid>
					<Grid container item lg={3} direction="column" spacing={4}>
						<Grid item lg>
							<Typography variant="caption" gutterBottom>Damage</Typography>
							<Typography variant="body1">{str * 2} - {str * 4}</Typography>
						</Grid>
						<Grid item lg>
							<Typography variant="caption" gutterBottom>Health</Typography>
							<Typography variant="body1">{vit * 10}</Typography>
						</Grid>
						<Grid item lg>
							<Typography variant="caption" gutterBottom>Mana</Typography>
							<Typography variant="body1">{int * 5}</Typography>
						</Grid>
						<Grid item lg>
							<Typography variant="caption" gutterBottom>Dodge Chance</Typography>
							<Typography variant="body1">{(dex * 0.15).toPrecision(4)}%</Typography>
						</Grid>
						<Grid item lg>
							<Typography variant="caption" gutterBottom>Critical Chance</Typography>
							<Typography variant="body1">{(2 * Math.sqrt(dex)).toPrecision(4)}%</Typography>
						</Grid>
					</Grid>
				</Grid>
			</CardContent>
			<CardActions style={{position: "absolute", bottom: 0, width: "100%"}}>
				<Button
					fullWidth
					variant="contained"
					color="primary"
					disabled={getPointsLeft() > 0}
					onClick={async () => await nav.navigate("/game")}
				>
					Create
				</Button>
			</CardActions>
		</Card>
	</div>;
};

export default CreateHero;
