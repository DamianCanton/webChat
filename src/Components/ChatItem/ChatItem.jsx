import React, { useState } from 'react'
import { useEffect } from 'react'
import styles from './ChatItem.module.css'
import { getContacts } from '../../Services/contactService'

const ChatItem = ({Avatar, Name, Id, LastMessage, Status}) => {
    
    const [ contact, setContact] = useState()

    function loadContact() {
        const contact = getContacts()
        setContact(contact)
    }
        useEffect(() => {
            loadContact()
        }, []) 


    return (
    <div className={styles.chatItem}>
        <img src={Avatar}/>
        <h4>{Name}</h4>
        <p>ID: {Id}</p>
        <p>Ultimo mensaje: {LastMessage.message}</p>
        <span> Estado: {Status}</span>
    </div>
    )
}

export default ChatItem