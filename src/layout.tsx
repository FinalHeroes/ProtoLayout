import {createElement, FunctionComponent} from "react";
import {AppBar, Button, createStyles, CssBaseline, makeStyles, Theme, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
		},
		appBar: {
			[theme.breakpoints.up('sm')]: {
				zIndex: theme.zIndex.drawer + 1,
			},
		},
		toolbar: theme.mixins.toolbar,
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
		appBarButton: {
			marginLeft: theme.spacing(2),
			marginRight: theme.spacing(2),
		}
	}),
);

export const RootLayout: FunctionComponent = props => {
	const classes = useStyles();

	return <div className={classes.root}>
		<CssBaseline/>
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar variant="dense">
				<Typography variant="h6" color="inherit" style={{paddingRight: 10}}>
					Heroes
				</Typography>

				<Button color="inherit" classes={{label: classes.appBarButton}}>World</Button>
				<Button color="inherit" classes={{label: classes.appBarButton}}>Hero</Button>
				<Button color="inherit" classes={{label: classes.appBarButton}}>Inventory</Button>
				<Button color="inherit" classes={{label: classes.appBarButton}}>Social</Button>
			</Toolbar>
		</AppBar>
		<main className={classes.content}>
			<div className={classes.toolbar}/>
			{props.children || null}
		</main>
	</div>;
};
