    import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from "./actionTypes";

    export const addContact = (contact: Contact) => ({
    type: ADD_CONTACT,
    payload: contact,
    });

    export const editContact = (id: number, updatedContact: Contact) => ({
    type: EDIT_CONTACT,
    payload: { id, updatedContact },
    });

    export const deleteContact = (id: number) => ({
    type: DELETE_CONTACT,
    payload: id,
    });

    interface Contact {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    }
