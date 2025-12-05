import React from "react";
import MessagesList from "../MessagesList/MessagesList";
import CreateNewMessage from "../CreateNewMessages/CreateNewMessage";
import { useContext } from "react";
import { ContactContext } from "../../Context/ContactContext";

const ChatDetail = () => {
    const { selectedChat } = useContext(ContactContext);

    return (
        <div>
        <h2>{selectedChat.name}</h2>
        <MessagesList messages={selectedChat.LastMessage} />
        <CreateNewMessage />
        </div>
    );
};

export default ChatDetail