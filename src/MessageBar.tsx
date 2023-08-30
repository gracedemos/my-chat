import React, { useState } from "react";
import axios from "axios";

interface Props {
	name: string
}

function MessageBar(props: Props) {
	const [message, setMessage] = useState("");

	return (
		<div id="message-bar">
			<input id="message-input" type="text" value={message} placeholder="Message" onChange={e => setMessage(e.target.value)} onKeyDown={k => {
				if(k.key === "Enter") {
					submit(props.name, message, setMessage);
				}
			}}/>
			<button id="message-submit" type="submit" onClick={() => submit(props.name, message, setMessage)}>Submit</button>
		</div>
	)
}

function submit(name: string, msg: string, setter: Function) {
	if(msg === "") {
		return;
	}

	axios.post("http://127.0.0.1:8080", {
		name: name,
		msg: msg
	});

	setter("");
}

export default MessageBar;
