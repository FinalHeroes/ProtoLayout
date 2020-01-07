import {createElement, Fragment, FunctionComponent} from "react";
import {AppBar, Button, createStyles, CssBaseline, makeStyles, Theme, Toolbar, Typography} from "@material-ui/core";
import {useLinkProps} from "react-navi";

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
		appBarLabel: {
			marginLeft: theme.spacing(2),
			marginRight: theme.spacing(2),
		}
	}),
);

interface AppBarLinkProps {
	text: string;
	href: string;
}

const AppBarLink: FunctionComponent<AppBarLinkProps> = props => {
	const {text, href} = props;

	const classes = useStyles();
	const linkProps = useLinkProps({href});

	return <Button color="inherit" component="a" classes={{label: classes.appBarLabel}} {...linkProps}>
		{text}
	</Button>
};

export const RootLayout: FunctionComponent = props => {
	const classes = useStyles();

	return <div className={classes.root}>
		<CssBaseline/>
		{props.children || null}
	</div>;
};

export const GameLayout: FunctionComponent = props => {
	const classes = useStyles();

	return <Fragment>
		<AppBar position="fixed" className={classes.appBar}>
			<Toolbar variant="dense">
				<Typography variant="h6" color="inherit" style={{paddingRight: 10}}>
					Heroes
				</Typography>

				<AppBarLink text="World" href="/game/"/>
				<AppBarLink text="Hero" href="/game/hero"/>
				<AppBarLink text="Social" href="/game/social"/>
			</Toolbar>
		</AppBar>
		<main className={classes.content}>
			<div className={classes.toolbar}/>
			{props.children || null}
		</main>
	</Fragment>;
};
