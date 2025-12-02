import React, {useState} from 'react'
import styles from './ChatPage.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ChatItem from '../../Components/ChatItem/ChatItem'
import { getContacts } from '../../Services/contactService'

const ChatPage = () => {

    const [chats, setChats] = useState(getContacts())

    return (

        <div className={styles.chatPage}>
            <aside className={styles.leftPanel}>
                <h3>Chats</h3>
                <SearchBar/>
                {chats.map(chat => (
                    <ChatItem
                        key={chat.id}
                        id={chat.id}
                        name={chat.name}
                        LastMessage={chat.LastMessage}
                        Status={chat.Status}
                        Avatar={chat.Avatar}
                        />))}
            </aside>
            <main className={styles.rightPanel}>
                <h2>Ningun chat seleccionado</h2>
            </main>
        </div>
    )
}

export default ChatPage