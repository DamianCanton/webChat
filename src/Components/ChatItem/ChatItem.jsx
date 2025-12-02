import React from 'react'
import styles from './ChatItem.module.css'

const ChatItem = ({id, name, LastMessage, Status, Avatar}) => {
    
    return (
    <div className={styles.chatItem}>
        <img src={Avatar}/>
        <h4>{name}</h4>
        <p>ID: {id}</p>
        <p>Último mensaje: {LastMessage}</p>
        <span> Estado: {Status}</span>
    </div>
    )
}

export default ChatItem