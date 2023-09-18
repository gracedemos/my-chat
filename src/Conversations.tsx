import React, { useState } from "react";
import axios from "axios";
import Chats from "./Chats";
import AddChat from "./AddChat";
import ToName from "./to-name";

interface Props {
	toName: ToName
}

function Conversations(props: Props) {
	const [name, setName] = useState("");

	axios.get("/getname")
	.then(response => {
		setName(response.data);
	});

	return (
		<div id="conversations">
			<div id="toolbar">
				<h3 id="acc-name">{name}</h3>
				<div id="toolbar-sep"/>
				<button id="signout" onClick={signout}>Sign Out</button>
			</div>
			<div id="chats-bar">
				<h4 id="chats-h4">Chats</h4>
				<AddChat to_name={props.toName}/>
			</div>
			<Chats toName={props.toName}/>
		</div>
	)
}

function signout() {
	axios.get("/signout")
	.then(_ => {
		window.location.assign("/login");
	});
}

export default Conversations;
