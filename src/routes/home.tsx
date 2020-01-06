import {createElement, Fragment, FunctionComponent} from "react";
import {createStyles, makeStyles, Theme, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		content: {
			flexGrow: 1,
			padding: theme.spacing(3),
		},
	}),
);

const Home: FunctionComponent = () => {
	const classes = useStyles();
	return <div className={classes.content}>
		<Typography variant="h4">Home</Typography>
		<Typography paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in nisl a dolor porta
			fermentum. Donec porttitor eleifend ante a hendrerit. Nulla in hendrerit risus. Sed a dui metus. Suspendisse
			malesuada convallis lectus, et venenatis velit. Fusce sed commodo tortor. Phasellus ultricies ligula nunc,
			eu tristique lacus auctor a. Fusce purus nisi, consectetur eu malesuada eu, accumsan id leo.</Typography>
		<Typography paragraph>Pellentesque malesuada ante eget dolor congue, eu pellentesque nibh rutrum. Donec nec
			libero lectus. Quisque fringilla venenatis risus. Vivamus sed rutrum nunc. Phasellus sit amet lorem at
			turpis congue feugiat eget at sem. Vestibulum ipsum arcu, laoreet vel hendrerit vehicula, rutrum in leo. In
			fringilla sem vitae enim tincidunt efficitur posuere ac mauris. Praesent ut nibh ornare, mollis lectus sed,
			aliquam nisl. Quisque urna diam, maximus ut bibendum ut, condimentum sit amet turpis.</Typography>
		<Typography paragraph>Etiam elementum eros id dignissim porta. Pellentesque eleifend dapibus odio eu laoreet.
			Aliquam vulputate arcu tristique, convallis orci id, scelerisque urna. Quisque finibus orci ut dolor
			iaculis, id auctor magna aliquet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur
			ridiculus mus. Sed efficitur eros non dignissim suscipit. Lorem ipsum dolor sit amet, consectetur adipiscing
			elit.</Typography>
		<Typography paragraph>Praesent id efficitur eros, sed cursus quam. Suspendisse laoreet quis nibh a molestie.
			Etiam aliquam augue eleifend neque molestie dignissim. Aliquam sollicitudin commodo nulla, eu vestibulum
			diam ultricies at. Praesent a sagittis sem, vitae gravida eros. Pellentesque ornare vehicula nulla in
			pretium. Nulla non ante ac est pulvinar varius. Morbi porttitor et leo sit amet efficitur. Integer in
			interdum nunc. Donec ultrices quam congue velit fringilla vehicula et ac velit.</Typography>
		<Typography paragraph>In nec auctor purus, in vestibulum nisi. Etiam mattis sit amet ex sed pulvinar. Morbi
			ultricies lacus et augue eleifend, sit amet congue erat auctor. Pellentesque fermentum ac nisl vel rhoncus.
			Integer at leo at metus placerat hendrerit sit amet ac dolor. Morbi tincidunt ultrices lorem vitae egestas.
			In risus ex, accumsan nec massa et, ornare consectetur metus. Proin quis dui lorem. Duis dolor augue, porta
			id tempus quis, feugiat eleifend sem. Suspendisse aliquet, mi vitae facilisis lacinia, odio est sodales
			ipsum, a commodo nunc justo a nibh. Pellentesque in facilisis ante, viverra lacinia ante. Nulla lobortis ex
			nulla, quis porta nunc dignissim sed. Etiam quis quam sit amet lacus luctus hendrerit. Quisque tempor dui a
			convallis pharetra.</Typography>
		<Typography paragraph>Etiam a imperdiet nisl, ut tincidunt diam. Maecenas dui metus, consequat quis augue
			finibus, fringilla tincidunt erat. Nunc ac eros iaculis, aliquam dolor non, tristique quam. Morbi rhoncus
			varius arcu, mattis semper leo. Donec placerat fermentum purus, et aliquet augue aliquam eu. Etiam vel leo
			euismod, varius nunc accumsan, tincidunt nisi. Morbi ut tristique felis, a congue magna. Praesent auctor,
			turpis ut aliquet sollicitudin, lorem nisl cursus mauris, vitae pellentesque enim mi at risus. Sed at ante
			ac metus rhoncus vestibulum. Pellentesque non aliquam diam, et dignissim urna. Maecenas porta libero velit,
			non posuere nibh elementum pretium.</Typography>
		<Typography paragraph>Nunc hendrerit porta bibendum. Ut posuere libero vel dolor blandit, eget luctus enim
			maximus. Mauris pulvinar enim feugiat nulla accumsan finibus. Sed imperdiet tincidunt purus nec
			pellentesque. Proin posuere massa ac erat blandit, quis feugiat orci porttitor. Vestibulum condimentum quam
			id justo mollis, at mollis ante porttitor. Pellentesque nulla lacus, laoreet ac nisi sed, luctus vulputate
			mauris. Etiam varius augue sed enim finibus, dictum porta orci maximus.</Typography>
		<Typography paragraph>Donec a convallis erat. Curabitur finibus mauris vel vulputate fermentum. Cras leo eros,
			bibendum iaculis faucibus sed, hendrerit sed nibh. Vestibulum porta vestibulum elit, quis dignissim lorem
			egestas non. Pellentesque in neque purus. Duis est elit, dignissim non eleifend et, consequat et justo. Nunc
			et neque odio. Vestibulum egestas felis nec lorem vehicula porttitor. Pellentesque accumsan sapien ex, eget
			convallis libero convallis vel.</Typography>
		<Typography paragraph>Mauris malesuada vehicula justo quis efficitur. Ut scelerisque mi at tempus volutpat. Sed
			in sollicitudin tortor, ut gravida lorem. Morbi augue purus, rhoncus vel malesuada ut, tempor in libero.
			Nulla convallis orci ut ipsum interdum, ut pretium ligula fringilla. Quisque ut commodo metus, id euismod
			ex. Nullam rutrum tempor vulputate. Phasellus mauris eros, blandit ut dolor et, semper posuere quam. Aenean
			fermentum purus sed mauris sollicitudin volutpat. Nam ut hendrerit mi. Pellentesque habitant morbi tristique
			senectus et netus et malesuada fames ac turpis egestas. Aenean hendrerit accumsan elit in commodo. Morbi
			viverra lacus magna, at aliquet massa sodales sed. Nulla facilisis non ex quis luctus. Morbi non justo ac
			lectus porta sodales.</Typography>
		<Typography paragraph>Donec iaculis ipsum ut eros sollicitudin, non blandit velit scelerisque. Aenean
			pellentesque faucibus volutpat. Praesent ac quam orci. Suspendisse et dui eu lacus mollis consectetur eget
			quis urna. Vestibulum et ante euismod, aliquet elit ut, ullamcorper leo. Nam eleifend et mi sit amet
			ullamcorper. Sed aliquam libero nulla, sed tincidunt felis fringilla in. Aliquam et diam mattis, maximus
			nisi id, imperdiet purus. Suspendisse potenti. Fusce in felis erat. Morbi accumsan varius neque quis
			fermentum. Duis urna lacus, lobortis ac turpis eu, placerat sollicitudin tellus. Vivamus placerat tincidunt
			mi, sit amet tempus mauris pulvinar faucibus.</Typography>
	</div>;
};

export default Home;
