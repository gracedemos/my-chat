import React, { useEffect, useState } from "react";
import axios from "axios";

import Message from "./Message";
import ToName from "./to-name";

interface MsgObject {
	from_name: string,
	to_name: string,
	msg: string
}

interface Props {
	toName: ToName
}

function Messages(props: Props) {
	const [messages, setMessages] = useState<MsgObject[]>([]);

	useEffect(() => {
		setInterval(() => {
			axios.post("/msg", {
				to_name: props.toName.toName
			}, { withCredentials: true} )
			.then(response => {
				setMessages(response.data);
			})
			.catch(_ => {
				window.location.reload();
			})
		}, 250);
	}, []);

	let messageComps: JSX.Element[] = [];
	messages.forEach(message => {
		messageComps.push(<Message name={message.from_name} msg={message.msg}/>);
	})

	return (
		<div id="messages">
			{messageComps}
		</div>
	)
}

export default Messages;
