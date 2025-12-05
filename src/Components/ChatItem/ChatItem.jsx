import React from "react";

import styles from "./ChatItem.module.css";


const ChatItem = ({ Avatar, Name, Id, LastMessage, Status}) => {
    return (
        <div className={styles.chatItem}>
            <img src={Avatar} alt={Name} className={styles.avatar} />
            <div className={styles.content}>
                <div className={styles.header}>
                    <h5 className={styles.name}>{Name}</h5>
                    <span className={styles.status}>{Status}</span>
                </div>
                <p className={styles.message}>{LastMessage.message}</p>
            </div>
        </div>
    );
};

export default ChatItem;
