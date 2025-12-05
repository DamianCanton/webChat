import React, { createContext, useEffect, useState } from "react";
import { getContacts } from "../Services/contactService";

export const ContactContext = createContext();

const ContactContextProvider = ({ children }) => {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [contact_id, setContactId] = useState(null);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
        const data = getContacts();
        setContacts(data);
        setLoading(false);
        }, 2000);
    }, []);

    const filteredContacts = contacts.filter((contact) =>
        contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
            author_id: "yo",
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

    function createNewMessage(message) {
        if (!selectedChat) return;
        const new_message = {
            id: selectedChat.LastMessage.length + 1,
        author_id: 50,
        message: message,
        author_name: "yo",
        created_at: "Hoy",
        status: "visto",
        };
        setContacts((prev_state) => {
        return prev_state.map((chat) => {
            if (Number(chat.id) === Number(contact_id)) {
            return {
                ...chat,
                LastMessage: [...chat.LastMessage, new_message],
            };
            }
            return chat;
        });
        });

        setTimeout(sendAutoMessage, 5000);
    }

    function sendAutoMessage() {
        if (!selectedChat) return;
        const new_message = {
            id: selectedChat.LastMessage.length + 2,
        author_id: selectedChat.id,
        message: "Bueno bro",
        author_name: selectedChat.name,
        created_at: "Hoy",
        status: "visto",
        };
        setContacts((prev_state) => {
        return prev_state.map((chat) => {
            if (Number(chat.id) === Number(contact_id)) {
            return {
                ...chat,
                LastMessage: [...chat.LastMessage, new_message],
            };
            }
            return chat;
        });
        });
    }

    return (
        <ContactContext.Provider
        value={{
            contacts,
            loading,
            searchQuery,
            setSearchQuery,
            addNewContact,
            selectedChat,
            createNewMessage,
            filteredContacts,
            setContactId,
        }}
        >
        {children}
        </ContactContext.Provider>
    );
};

export default ContactContextProvider;
