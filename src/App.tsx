import React from 'react';

import Messages from "./Messages";
import MessageBar from "./MessageBar";
import Conversations from './Conversations';
import Cookies from "universal-cookie";
import axios from "axios";

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

	return (
		<div id="app">
			<Conversations/>
			<div id="chat">
				<Messages/>
				<MessageBar/>
			</div>
		</div>
	)
}

export default App;
