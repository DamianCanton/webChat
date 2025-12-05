import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import styles from "./ChatPage.module.css";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ChatList from "../../Components/ChatList/ChatList";
import ChatDetail from "../../Components/ChatDetail/ChatDetail";
import { getContacts } from "../../Services/contactService";

const ChatPage = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { contact_id } = useParams();

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      const data = getContacts();
      setContacts(data);
      setLoading(false);
    }, 2000);
  }, []);

  const addNewContact = (name) => {
    const new_contact = {
      id: contacts.length + 1,
      name: name,
      Avatar:
        "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg",
      Status: "En linea",
      is_connected: true,
      LastMessage: [
        {
          id: 1,
          author: "yo",
          message: "Nuevo contacto agregado",
          status: "visto",
          day: "Hoy",
          hour: "12:00 PM",
        },
      ],
    };
    setContacts((prev) => [...prev, new_contact]);
  };

  const selectedChat = contacts.find(
    (contact) => Number(contact.id) === Number(contact_id)
  );

  return (
    <div className={styles.chatPage}>
      <aside className={styles.leftPanel}>
        <h3 className={styles.title}>Chats</h3>
        <SearchBar />
        <ChatList
          contacts={contacts}
          loading={loading}
          addNewContact={addNewContact}
        />
      </aside>
      <main className={styles.rightPanel}>
        {selectedChat ? (
          <ChatDetail chatDetail={selectedChat} />
        ) : (
          <h2>Ningun chat seleccionado</h2>
        )}
      </main>
    </div>
  );
};

export default ChatPage;
