import React from "react";
import MessagesList from "../MessagesList/MessagesList";
import CreateNewMessage from "../CreateNewMessages/CreateNewMessage";

const ChatDetail = ({chatDetail, createNewMessage}) => {
    
    
    return (
    <div>
        <h2>{chatDetail.name}</h2>
        <MessagesList messages={chatDetail.LastMessage} />
        <CreateNewMessage createNewMessage={createNewMessage} />
    </div>
    )
}

export default ChatDetail