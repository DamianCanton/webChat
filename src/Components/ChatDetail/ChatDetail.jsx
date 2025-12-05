import React from "react";
import MessagesList from "../MessagesList/MessagesList";
import CreateNewMessage from "../CreateNewMessages/CreateNewMessage";
import { useContext } from "react";
import { ContactContext } from "../../Context/ContactContext";

import styles from "./ChatDetail.module.css";

const ChatDetail = () => {
    const { selectedChat, setContactId } = useContext(ContactContext);

    return (
        <div className={styles.chatDetail}>
        <div className={styles.header}>
            <button
            className={styles.backButton}
            onClick={() => setContactId(null)}
            >
            ←
            </button>
            <h2>{selectedChat.name}</h2>
        </div>
        <MessagesList messages={selectedChat.LastMessage} />
        <CreateNewMessage />
        </div>
    );
};

export default ChatDetail