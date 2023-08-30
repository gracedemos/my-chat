import React from 'react';

import Messages from "./Messages";
import MessageBar from "./MessageBar";

function App() {
	return (
		<div id="chat">
			<Messages/>
			<MessageBar name="Juan"/>
		</div>
	)
}

export default App;
