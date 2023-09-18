import React, { useState } from "react";
import axios from "axios";
import ToName from "./to-name";

interface Props {
	to_name: ToName
}

function MessageBar(props: Props) {
	const [message, setMessage] = useState("");

	return (
		<div id="message-bar">
			<input id="message-input" type="text" value={message} placeholder="Message" onChange={e => setMessage(e.target.value)} onKeyDown={k => {
				if(k.key === "Enter") {
					submit(message, setMessage, props);
				}
			}}/>
			<button id="message-submit" type="submit" onClick={() => submit(message, setMessage, props)}>Submit</button>
		</div>
	)
}

function submit(msg: string, setter: Function, props: Props) {
	if(msg === "") {
		return;
	}

	axios.post("/add-msg", {
		to_name: props.to_name.toName,
		msg: msg
	}, { withCredentials: true })
	.catch(_ => {});

	setter("");
}

export default MessageBar;
