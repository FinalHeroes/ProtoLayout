import {createMuiTheme, Theme, ThemeProvider} from "@material-ui/core";
import {FunctionComponent, createElement, Suspense} from "react";
import {green, orange} from "@material-ui/core/colors";
import {HelmetProvider} from "react-navi-helmet-async";
import {Router, View} from "react-navi";

import {RootLayout} from "./layout";
import Routes from "./routes";

const theme: Theme = createMuiTheme({
	palette: {
		type: "dark",
		primary: green,
		secondary: orange
	}
});

export const Site: FunctionComponent = props => {
	return <HelmetProvider>
		<Router routes={Routes}>
			<ThemeProvider theme={theme}>
				<RootLayout>
					<Suspense fallback={null}>
						<View/>
					</Suspense>
				</RootLayout>
			</ThemeProvider>
		</Router>
	</HelmetProvider>;
};
