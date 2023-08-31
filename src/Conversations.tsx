import React, { useState } from "react";
import axios from "axios";

function Conversations() {
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
