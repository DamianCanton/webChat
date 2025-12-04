import React, { useState, createContext, useEffect } from 'react'
import {Outlet, useParams} from "react-router-dom"
import { getContactById }  from "../services/contactService"


export const ContactDetailContext = createContext (
    {
        isContactDetailLoandig: false,
        contactDetailed: null,
        oneCreateNewMessege: (new_messege) => {},
    }
)

const ContactDetailContextProvider = (props) => {
    const [isContactDetailLoandig, setIsContactDetailLoading] = useState(false)
    const [contactDetailed, setContactDetailed] = useState (null)

    const {id_contact} = useParams()

    function loadContactById (contact_id){
        setIsContactDetailLoading (true)

        setTimeout (
            () => {
                const contact = getContactById(contact_id)
                setContactDetailed (contact)
                setIsContactDetailLoading (false)
            },
            2000
        )
    }   

    useEffect (
        () => {
            loadContactById (id_contact)
        },
        [id_contact]
    )

    const onCreateNewMessege = (new_messege) => {
        const new_messege_object = {
            content: new_messege,
            author: 'YO',
            timestamp:'19:00',
            id: contactDetailed.messeges.length + 1,
        }
        const messages_cloned = [...contactDetailed.messeges]
        messages_cloned.push (new_messege_object)
        setContactDetailed (
            {
                ...contactDetailed,
                messeges: messages_cloned
            }
        )
    }

    return (
        <ContactDetailContext.Provider 
        value = {
            {
                isContactDetailLoandig: isContactDetailLoandig,
                contactDetailed: contactDetailed,
                oneCreateNewMessege: onCreateNewMessege
            }
        }
        >
        <Outlet/>
    </ContactDetailContext.Provider>
    )
}

export default ContactDetailContextProvider