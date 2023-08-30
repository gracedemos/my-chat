import React, { useEffect, useState } from "react";
import axios from "axios";

import Message from "./Message";

function Messages() {
	const [messageCount, setMessageCount] = useState(0);
	const [messages, setMessages] = useState([]);

	useEffect(() => {
		setInterval(() => {
			axios.get("http://127.0.0.1:8080")
			.then(response => {
				setMessageCount(response.data.message_count);
				setMessages(response.data.messages);
			});
		}, 250);
	}, []);

	let messageComps = [];
	for(let i = 0; i < messageCount; i++) {
		messageComps.push(<Message name={messages[i]["name"]} msg={messages[i]["msg"]}/>);
	}

	return (
		<div id="messages">
			{messageComps}
		</div>
	)
}

export default Messages;
