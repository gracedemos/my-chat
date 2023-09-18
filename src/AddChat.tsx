import React, {useState} from "react";
import Select from "react-select";
import axios from "axios";
import ToName from "./to-name";

interface Option {
    value: string,
    label: string
}

interface User {
    name: string
}

interface Props {
    to_name: ToName
}

function AddChat(props: Props) {
    const [options, setOptions] = useState<Option[]>([]);
    const [option, setOption] = useState<Option>({value: "", label: ""});

    return (
        <div id="add-chat">
            <Select
                options={options}
                onChange={option => setOption(option!)}
                placeholder="New Chat"
                onMenuOpen={() => getUsers(setOptions)}
                id="select"
            />
            <button id="add-chat-button" onClick={() => {
                addUser(option, props.to_name);
            }}>+</button>
        </div>
    )
}

function getUsers(setOptions: Function) {
    axios.get("/get-users")
        .then(response => {
            let options: Option[] = [];
            response.data.forEach((user: User) => {
                options.push({
                    value: user.name,
                    label: user.name
                });
            });
            setOptions(options);
        });
}

function addUser(option: Option, toName: ToName) {
    axios.post("/add-chat", {
        to_name: option.value
    }, {withCredentials: true})
        .catch(_ => {});

    toName.set(option.value);
}

export default AddChat;