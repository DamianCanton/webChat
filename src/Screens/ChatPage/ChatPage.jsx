import styles from "./ChatPage.module.css";
import SearchBar from "../../Components/SearchBar/SearchBar";
import ChatList from "../../Components/ChatList/ChatList";
import ChatDetail from "../../Components/ChatDetail/ChatDetail";
import { useContext, useEffect } from "react";
import { ContactContext } from "../../Context/ContactContext";
import { useParams } from "react-router";

const ChatPage = () => {
    const { contact_id } = useParams()
  const {
    loading,
    addNewContact,
    selectedChat,
    filteredContacts,
    setContactId,
  } = useContext(ContactContext);
    useEffect (
        () => {
            setContactId(contact_id)
        },
        [contact_id]
    )

    return (
        <div className={styles.chatPage}>
        <aside className={styles.leftPanel}>
            <h3 className={styles.title}>Chats</h3>
            <SearchBar />
            <ChatList
            contacts={filteredContacts}
            loading={loading}
            addNewContact={addNewContact}
            />
        </aside>
        <main className={styles.rightPanel}>
            {selectedChat ? <ChatDetail /> : <h2>Ningun chat seleccionado</h2>}
        </main>
        </div>
    );
};

export default ChatPage;
