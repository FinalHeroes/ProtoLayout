import {createElement, FunctionComponent} from "react";
import {useNavigation} from "react-navi";
import {useForm} from "react-hook-form";
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	createStyles,
	Grid,
	makeStyles,
	TextField,
	Theme,
	Typography
} from "@material-ui/core";

interface LoginCredential {
	email: string;
	password: string;
}

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
			backgroundImage: "url('/assets/login-backdrop.jpg')",
			backgroundRepeat: "no-repeat",
			backgroundSize: "cover",
			backgroundPosition: "bottom",
			minHeight: "100vh",
		},

		card: {
			backgroundColor: "rgba(255, 255, 255, 0.6)",
		},
	}),
);

const Home: FunctionComponent = () => {
	const {register, handleSubmit, errors} = useForm<LoginCredential>();
	const nav = useNavigation();
	const classes = useStyles();

	const onSubmit = async (data: LoginCredential) => {
		try {
			await nav.navigate("/game");
		} catch (e) {
			alert("ERROR");
		}
	};

	return <div className={classes.content}>
		<Grid container spacing={5} justify="space-evenly" alignItems="center" style={{height: "100%"}}>
			<Grid item lg={5}>
				<Card raised className={classes.card}>
					<CardHeader title="What is this game?"/>
					<CardContent>
						<Typography paragraph>Description</Typography>
					</CardContent>
				</Card>
			</Grid>
			<Grid item lg={3}>
				<Card raised className={classes.card}>
					<form onSubmit={handleSubmit(onSubmit)}>
						<CardHeader title="Connect to the game"/>
						<CardContent>
							<TextField autoFocus margin="dense" label="Email Adress" name="email" fullWidth
							           inputRef={register({
								           required: true,
								           pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
							           })} error={Boolean(errors.email)}/>
							<TextField margin="dense" label="Password" type="password" name="password" fullWidth
							           inputRef={register({
								           required: true,
								           minLength: 7,
							           })} error={Boolean(errors.password)}/>
						</CardContent>
						<CardActions>
							<Button type="button" color="secondary" onClick={(e) => {
								alert("REGISTER");
							}}>
								Register
							</Button>
							<Button type="submit" color="primary">Login</Button>
						</CardActions>
					</form>
				</Card>
			</Grid>
		</Grid>
	</div>;
};

export default Home;
