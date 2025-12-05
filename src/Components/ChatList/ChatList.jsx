import React from "react";
import styles from "./ChatList.module.css";
import ChatItem from "../ChatItem/ChatItem";
import { Link } from "react-router";
import { AddContact } from "../AddContact/AddContact";
import { useContext } from "react";
import { ContactContext } from "../../Context/ContactContext";

const ChatList = () => {
    const { filteredContacts, loading } = useContext(ContactContext);
    return (
        <div className={styles.chatList}>
        {loading ? <p className={styles.loading}>Cargando contactos...</p> : null}
        {filteredContacts &&
            filteredContacts.map((contact) => (
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
        <AddContact />
        </div>
    );
};

export default ChatList;
