    import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from "../actions/actionTypes";

    interface Contact {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    }

    interface ContactState {
    contacts: Contact[];
    }

    const initialState: ContactState = {
    contacts: [],
    };

    const contactReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case ADD_CONTACT:
        return {
            ...state,
            contacts: [...state.contacts, action.payload],
        };
        case EDIT_CONTACT:
        const { id, updatedContact } = action.payload;
        return {
            ...state,
            contacts: state.contacts.map((contact) =>
            contact.id === id ? updatedContact : contact
            ),
        };
        case DELETE_CONTACT:
        return {
            ...state,
            contacts: state.contacts.filter((contact) => contact.id !== action.payload),
        };
        default:
        return state;
    }
    };

    export default contactReducer;
