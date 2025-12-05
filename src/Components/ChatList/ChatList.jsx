import React from "react";
import styles from "./ChatList.module.css";
import ChatItem from "../ChatItem/ChatItem";
import { Link } from "react-router";
import { AddContact } from "../AddContact/AddContact";

const ChatList = ({ contacts, loading, addNewContact }) => {
  return (
    <div className={styles.chatList}>
      {loading ? <p className={styles.loading}>Cargando contactos...</p> : null}
      {contacts &&
        contacts.map((contact) => (
          <Link
            to={"/chat/" + contact.id}
            key={contact.id}
            className={styles.link}
          >
            <ChatItem
              Avatar={contact.Avatar}
              Name={contact.name}
              Id={contact.id}
              LastMessage={contact.LastMessage[0]}
              Status={contact.Status}
            />
            <hr />
          </Link>
        ))}
      <AddContact addNewContact={addNewContact} />
    </div>
  );
};

export default ChatList;
