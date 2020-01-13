import {createElement, Fragment, FunctionComponent} from "react";
import {createStyles, Grid, makeStyles, Theme, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		content: {
			backgroundImage: "url('/assets/create-hero-background')",
		},
	}),
);

const CreateHero: FunctionComponent = () => {
	const classes = useStyles();

	return <Fragment>
		<Grid container justify="center">
			<Typography variant="h4">Create Hero</Typography>

		</Grid>
	</Fragment>;
};

export default CreateHero;
