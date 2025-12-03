import mockChats from "../Data/ContactData";

export function getContacts() {
    return mockChats;
}

export function getContactById(contact_id) {
    const contact_found = mockChats.find((contact) => Number(contact.id) === Number(contact_id));
    if (!contact_found) {
        return null;
    }
    return contact_found;
}

