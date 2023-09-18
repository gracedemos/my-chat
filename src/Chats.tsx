import React, { useEffect, useState } from "react";
import axios from "axios";
import ToName from "./to-name";

interface Props {
	toName: ToName
}

interface ChatsObject {
	to_name: string
}

function Chats(props: Props) {
	const [chats, setChats] = useState<ChatsObject[]>([]);

	useEffect(() => {
		setInterval(() => {
			axios.get("/get-chats")
			.then(response => {
				setChats(response.data)
			})
			.catch(_ => {});
		}, 250);
	}, []);

	let chatComps: React.ReactElement[] = [];
	chats.forEach(chat => {
		if(chat.to_name === props.toName.toName) {
			chatComps.push(<h3 id="selected">{chat.to_name}</h3>);
			return;
		}
		chatComps.push(<h3 id="unselected" onClick={() => props.toName.set(chat.to_name)}>{chat.to_name}</h3>);
	})

	return (
		<div id="chats">
			{chatComps}
		</div>
	)
}

export default Chats;
