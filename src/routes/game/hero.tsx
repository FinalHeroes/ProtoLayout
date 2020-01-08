import {createElement, FunctionComponent} from "react";
import {Card, CardContent, CardHeader, Grid, Typography} from "@material-ui/core";

const Hero: FunctionComponent = () => {
	return <Grid container justify="center">
		<Grid item lg={9}>
			<Card raised>
				<CardHeader title="Hero"/>
				<CardContent>
					<Grid container spacing={2}>
						<Grid container item direction="row" spacing={2}>
							<Grid container item lg={3} direction="column" justify="flex-start" spacing={3}>
								<Grid item>
									<Card>
										<CardContent>
											<Typography paragraph>Head</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item>
									<Card>
										<CardContent>
											<Typography paragraph>Chest</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item>
									<Card>
										<CardContent>
											<Typography paragraph>Belt</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item>
									<Card>
										<CardContent>
											<Typography paragraph>Boot</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>

							<Grid item lg={6}>
								<Card style={{height: "100%"}}>
									<CardContent>
										<Typography paragraph>Hero Picture Here</Typography>
									</CardContent>
								</Card>
							</Grid>

							<Grid container item lg={3} direction="column" justify="flex-start" spacing={3}>
								<Grid item>
									<Card>
										<CardContent>
											<Typography paragraph>Left Hand</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item>
									<Card>
										<CardContent>
											<Typography paragraph>Right Hand</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item>
									<Card>
										<CardContent>
											<Typography paragraph>Ring 1</Typography>
										</CardContent>
									</Card>
								</Grid>
								<Grid item>
									<Card>
										<CardContent>
											<Typography paragraph>Ring 2</Typography>
										</CardContent>
									</Card>
								</Grid>
							</Grid>
						</Grid>

						<Grid container item lg={12} justify="space-evenly">
							<Grid item lg={2}>
								<Card>
									<CardContent>
										<Typography paragraph>Neck</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item lg={2}>
								<Card>
									<CardContent>
										<Typography paragraph>Bag</Typography>
									</CardContent>
								</Card>
							</Grid>
							<Grid item lg={2}>
								<Card>
									<CardContent>
										<Typography paragraph>Artifact</Typography>
									</CardContent>
								</Card>
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</Grid>
	</Grid>;
};

export default Hero;
