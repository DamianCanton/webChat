import React from "react";
import styles from "./MessagesList.module.css";

const MessagesList = ({ messages }) => {
  return (
    <div className={styles.messagesContainer}>
      {messages.length === 0 ? (
        <p>No hay mensajes</p>
      ) : (
        messages.map((message) => {
          const isMe = message.author === "yo" || message.author_name === "yo";
          return (
            <div
              key={message.id}
              className={`${styles.messageBubble} ${
                isMe ? styles.sent : styles.received
              }`}
            >
              {!isMe && (
                <h3 className={styles.authorName}>{message.author_name}</h3>
              )}
              <p className={styles.messageContent}>{message.message}</p>
              <div className={styles.messageMeta}>
                <span className={styles.timestamp}>{message.created_at}</span>
                <span className={styles.status}>
                  {message.status === "VISTO" ? (
                    <span> Leido </span>
                  ) : (
                    <span> No leido </span>
                  )}
                </span>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};

export default MessagesList;
