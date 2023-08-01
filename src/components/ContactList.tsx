    import React from "react";
    import { useDispatch, useSelector } from "react-redux";
    import { deleteContact } from "../actions/contactActions";
    import styled from "styled-components";

    const List = styled.ul`
    list-style: none;
    padding: 0;
    `;

    const ListItem = styled.li`
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 8px;

    button {
        padding: 4px 8px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        color: #fff;
        font-weight: bold;
    }

    button.edit {
        background-color: gray;
    }

    button.delete {
        background-color: red;
    }
    `;

    interface Contact {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    }

    interface ContactListProps {
    setContactToEdit: React.Dispatch<React.SetStateAction<Contact | undefined>>;
    }

    const ContactList: React.FC<ContactListProps> = ({ setContactToEdit }) => {
    const contacts = useSelector((state: any) => state.contacts);
    const dispatch = useDispatch();

    const handleDelete = (id: number) => {
        dispatch(deleteContact(id));
    };

    return (
        <List>
        {contacts.map((contact: Contact) => (
            <ListItem key={contact.id}>
            <span>{contact.fullName}</span>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <button
                className="edit"
                onClick={() => setContactToEdit(contact)}
            >
                Editar
            </button>
            <button
                className="delete"
                onClick={() => handleDelete(contact.id)}
            >
                Remover
            </button>
            </ListItem>
        ))}
        </List>
    );
    };

    export default ContactList;
