import React from 'react';
import './App.css';

import Messages from "./Messages";
import MessageBar from "./MessageBar";

function App() {
	return (
		<div id="main">
			<Messages/>
			<MessageBar name="Juan"/>
		</div>
	)
}

export default App;
