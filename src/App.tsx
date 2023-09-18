import React, { useState } from 'react';

import Messages from "./Messages";
import MessageBar from "./MessageBar";
import Conversations from './Conversations';
import Cookies from "universal-cookie";
import axios from "axios";
import ToName from "./to-name";

function App() {
	const cookies = new Cookies({ path: '/' });
	let session: string = cookies.get("session");
	if(session === undefined) {
		window.location.assign("/login");
	}
	axios.get("/validate", { withCredentials: true })
	.catch(_ => {
		window.location.assign("/login");
	})

	const [toName, setToName] = useState(new ToName);

	return (
		<div id="app">
			<Conversations toName={toName} setToName={setToName}/>
			<div id="chat">
				<Messages toName={toName}/>
				<MessageBar to_name={toName}/>
			</div>
		</div>
	)
}

export default App;
