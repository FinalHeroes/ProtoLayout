import {
	Button,
	Card,
	CardContent,
	CardHeader,
	ExpansionPanel,
	ExpansionPanelActions,
	ExpansionPanelDetails, ExpansionPanelProps,
	ExpansionPanelSummary,
	Grid,
	Typography
} from "@material-ui/core";
import {ChangeEvent, createElement, FunctionComponent, Fragment, useState} from "react";
import {ExpandMore} from "@material-ui/icons";

interface MessageData {
	id: string;
	title: string;
	content: string;
	createdAt: Date;

	previous?: MessageData;
}

interface MessageDisplayProps {
	message: MessageData;
}

const MessageDisplay: FunctionComponent<MessageDisplayProps & ExpansionPanelProps> = props => {
	const {message, ...expProps} = props;

	return <ExpansionPanel {...expProps}>
		<ExpansionPanelSummary expandIcon={<ExpandMore/>}>
			<Typography>{message.title}</Typography>
		</ExpansionPanelSummary>
		<ExpansionPanelDetails>
			<Typography>{message.content}</Typography>
		</ExpansionPanelDetails>
		{message.previous && <ExpansionPanelDetails style={{display: "block"}}>
			<MessageDisplay message={message.previous}/>
		</ExpansionPanelDetails>}
		<ExpansionPanelActions>
			<Button color="secondary">Delete</Button>
			<Button color="primary">Reply</Button>
		</ExpansionPanelActions>
	</ExpansionPanel>
};

interface MessageDisplayListProps {
	messages: Array<MessageData>;
}

const MessageDisplayList: FunctionComponent<MessageDisplayListProps> = props => {
	const {messages} = props;
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleExpansion = (panel: string) => (event: ChangeEvent<{}>, isExpanded: boolean) => {
		setExpanded(isExpanded ? panel : false);
	};

	return <Fragment>
		{messages.map((msg, id) => (
			<MessageDisplay message={msg} key={id}
			                TransitionProps={{ unmountOnExit: true }}
			                expanded={expanded === msg.id}
			                onChange={handleExpansion(msg.id)}
			/>
		))}
	</Fragment>;
};

const Message: FunctionComponent = () => {
	const messages: Array<MessageData> = [
		{
			id: "multi1",
			title: "RE : RE : Multi Message",
			content: "Blah Blah Blah",
			createdAt: new Date(),
			previous: {
				id: "multi2",
				title: "RE : Multi Message",
				content: "Blah Blah Blah",
				createdAt: new Date(),
				previous: {
					id: "multi3",
					title: "Multi Message",
					content: "Blah Blah Blah",
					createdAt: new Date(),
				},
			},
		},
	];

	[...Array(10).keys()].map(value => messages.push({
		id: value.toString(),
		title: `Message ${value + 1}`,
		content: "This is a Message!",
		createdAt: new Date(),
	}));

	return <Grid container justify="center">
		<Grid item lg={9}>
			<Card raised>
				<CardHeader title="Messages"/>
				<CardContent>
					<MessageDisplayList messages={messages}/>
				</CardContent>
			</Card>
		</Grid>
	</Grid>;
};

export default Message;
