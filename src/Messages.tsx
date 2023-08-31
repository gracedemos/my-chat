import React, { useEffect, useState } from "react";
import axios from "axios";

import Message from "./Message";

interface MsgObject {
	name: string,
	msg: string
}

function Messages() {
	const [messages, setMessages] = useState<MsgObject[]>([]);

	useEffect(() => {
		setInterval(() => {
			axios.get("/msg")
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
		messageComps.push(<Message name={message.name} msg={message.msg}/>);
	})

	return (
		<div id="messages">
			{messageComps}
		</div>
	)
}

export default Messages;
