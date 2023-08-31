import React, { useState } from "react";
import axios from "axios";

function MessageBar() {
	const [message, setMessage] = useState("");

	return (
		<div id="message-bar">
			<input id="message-input" type="text" value={message} placeholder="Message" onChange={e => setMessage(e.target.value)} onKeyDown={k => {
				if(k.key === "Enter") {
					submit(message, setMessage);
				}
			}}/>
			<button id="message-submit" type="submit" onClick={() => submit(message, setMessage)}>Submit</button>
		</div>
	)
}

function submit(msg: string, setter: Function) {
	if(msg === "") {
		return;
	}

	axios.post("/msg", {
		msg: msg
	}, { withCredentials: true });

	setter("");
}

export default MessageBar;
