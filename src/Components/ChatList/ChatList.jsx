import React, { useState, useEffect } from 'react'
import { getContacts } from '../../Services/contactService'

const ChatList = () => {

    const [contact, setContact] = useState()

    function loadContact() {
        const contact = getContacts()
        setContact(contact)
    }
        useEffect(() => {
            loadContact()
        }, [])


    return (
    <div>

    </div>
    )
}

export default ChatList