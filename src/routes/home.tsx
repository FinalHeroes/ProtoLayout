import {createElement, Fragment, FunctionComponent} from "react";
import {createStyles, makeStyles, Theme, Typography} from "@material-ui/core";

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
	}),
);

const Home: FunctionComponent = () => {
	const classes = useStyles();
	return <div className={classes.content}>
		
	</div>;
};

export default Home;
