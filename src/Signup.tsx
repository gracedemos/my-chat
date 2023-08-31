import React, { useState } from "react";
import axios from "axios";

function Signup() {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div id="signup">
			<h1 id="title">Sign Up</h1>
			<input id="name-input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
			<input id="pass-input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
			<button type="submit" id="signup-submit" onClick={() => submit(name, password)}>Submit</button>
			<button id="login-button" onClick={() => window.location.assign("/login")}>Back to Log In</button>
		</div>
	)
}

function submit(name: string, password: string) {
	if(name === "" || password === "") {
		return;
	}

	axios.post("/signup", {
		name: name,
		password: password
	}, { withCredentials: true })
	.then(response => {
		if(response.status === 200) {
			window.location.assign("/login");
		}
	})
	.catch(_ => {
		return;
	})
}

export default Signup;
