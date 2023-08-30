import React from "react";

interface Props {
	name: string,
	msg: string
}

function Message(props: Props) {
	return (
		<div id="message">
			<h3 id="name">{props.name}</h3>
			<p id="msg">{props.msg}</p>
		</div>
	)
}

export default Message;
