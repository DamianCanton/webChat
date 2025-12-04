import { useEffect } from "react"


export const ContactListContext = createContext(
    {
        contactList: [],
        isContactListLoading: false
    }
)

const ContactListContextProvider = (props) => {
    const [contactList, setContactList] = useState([])
    const [isContactListLoading, setIsContactListLoading] = useState(false)

    const loadContactList = () => {
        setIsContactListLoading(true)
        setTimeout(
            () => {
                const contact_list_response = getAllContacts()
                setContactList(contact_list_response)
                setIsContactListLoading(false)
            },
            2000
        )
    }

    useEffect(
        ( ) => {
            loadContactList()
        },
        []
    )

    return (
        <ContactListContext.Provider
        value = {
            {
                contactList: contactList,
                isContactListLoading: isContactListLoading
            }
        }
        >
        <props.children/>
    </ContactListContext.Provider>
    )
}


export default ContactListContextProvider