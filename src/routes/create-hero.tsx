import {createElement, FunctionComponent, useState} from "react";
import {AddSharp, RemoveSharp} from "@material-ui/icons";
import {green} from "@material-ui/core/colors";
import {useNavigation} from "react-navi";
import {
	Button,
	ButtonGroup,
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardHeader,
	createStyles,
	Grid,
	GridList,
	GridListTile,
	makeStyles, styled,
	TextField,
	Theme,
	Typography
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		card: {
			position: "relative",
			height: "100%",
			backgroundColor: "rgba(255, 255, 255, 0.65)",
			maxHeight: window.innerHeight - theme.spacing(12) * 2,
		},
		avatarCard: {
			height: "100%",
			backgroundColor: "rgba(255, 255, 255, 0.5)",
		},
	}),
);

const Content = styled("div")(({theme}) => ({
	flexGrow: 1,
	padding: theme.spacing(12),
	backgroundImage: "url('/assets/create-hero-background.jpg')",
	backgroundRepeat: "no-repeat",
	backgroundSize: "cover",
	backgroundPosition: "bottom",
	minHeight: "100vh",
}));

const CreateHero: FunctionComponent = () => {
	const classes = useStyles();
	const nav = useNavigation();
	const [avatar, setAvatar] = useState<number | boolean>(false);
	const [name, setName] = useState("");
	const [str, setStr] = useState(10);
	const [dex, setDex] = useState(10);
	const [vit, setVit] = useState(10);
	const [int, setInt] = useState(10);

	const getPointsLeft = () => 10 - (str - 10) - (dex - 10) - (vit - 10) - (int - 10);

	return <Content>
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
						<Card raised classes={{root: classes.avatarCard}}>
							<CardHeader title="Choose your Avatar"/>
							<CardContent>
								<TextField margin="dense" label="Name" fullWidth value={name}
								           onChange={e => setName(e.target.value)}/>
								<GridList cellHeight={128} cols={5} style={{maxHeight: "45vh", overflow: "auto"}}>
									{[...Array(20).keys()].map(value => (
										<GridListTile key={value}>
											<Card variant="outlined"
												style={{
													height: "100%",
													backgroundColor: avatar === value ? green[300] : "white",
												}}
											>
												<CardActionArea
													style={{height: "100%"}}
													onClick={() => setAvatar(value)}
												>
													<CardContent>
														<Typography>Avatar {value + 1}</Typography>
													</CardContent>
												</CardActionArea>
											</Card>
										</GridListTile>
									))}
								</GridList>
							</CardContent>
						</Card>
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
					disabled={getPointsLeft() > 0 || avatar === false || name === ""}
					onClick={async () => await nav.navigate("/game")}
				>
					Create
				</Button>
			</CardActions>
		</Card>
	</Content>;
};

export default CreateHero;
