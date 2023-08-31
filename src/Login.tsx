import React, { useState } from "react";
import axios from "axios";

function Login() {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div id="login">
			<h1 id="title">Log In</h1>
			<input id="name-input" type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)}/>
			<input id="pass-input" type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
			<button type="submit" id="login-submit" onClick={() => submit(name, password)}>Log In</button>
			<button id="signup-button" onClick={() => window.location.assign("/signup")}>Sign Up</button>
		</div>
	)
}

function submit(name: string, password: string) {
	if(name === "" || password === "") {
		return;
	}

	axios.post("/login", {
		name: name,
		password: password
	}, { withCredentials: true })
	.then(response => {
		if(response.status === 200) {
			window.location.assign("/");
		}
	})
	.catch(_ => {
		return;
	})
}

export default Login;
