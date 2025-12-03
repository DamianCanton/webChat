import React from "react";
import ChatItem from "../ChatItem/ChatItem";
import styles from "./ChatList.module.css";

const ChatList = () => {
    return (
        <div className={styles.chatList}>
            <ChatItem />
        </div>
    );
};

export default ChatList;
