import React, {useState} from 'react'
import styles from './ChatPage.module.css'
import SearchBar from '../../Components/SearchBar/SearchBar'
import ChatItem from '../../Components/ChatItem/ChatItem'

const ChatPage = () => {

    const mockChats = [
        {
            name: 'Juan Perez',
            id: '12345',
            LastMessage: 'Hola, ¿cómo estás?',
            Status: 'En línea',
            Avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        {
            name: 'Maria Garcia',
            id: '67890',
            LastMessage: 'Nos vemos mañana.',
            Status: 'Desconectado',
            Avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        {
            name: 'Carlos Rodriguez',
            id: '11223',
            LastMessage: 'Perfecto, gracias!',
            Status: 'En línea',
            Avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        {
            name: 'Ana Lopez',
            id: '44556',
            LastMessage: '¿Recibiste el archivo?',
            Status: 'Ausente',
            Avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
        },
    ]

    const [chats, setChats] = useState(mockChats)

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