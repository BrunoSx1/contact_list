    import React, { useState } from "react";
    import { useDispatch } from "react-redux";
    import { addContact, editContact } from "../actions/contactActions";
    import styled from "styled-components";

    const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 8px;
    max-width: 400px;
    margin-bottom: 20px;
    `;

    const Input = styled.input`
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    `;

    const Button = styled.button`
    padding: 8px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    `;

    const AddButton = styled(Button)`
    background-color: green;
    `;

    interface ContactFormProps {
    contactToEdit?: Contact;
    setContactToEdit: React.Dispatch<React.SetStateAction<Contact | undefined>>;
    }

    export interface Contact {
    id: number;
    fullName: string;
    email: string;
    phone: string;
    }

    const ContactForm: React.FC<ContactFormProps> = ({ contactToEdit, setContactToEdit }) => {
    const [contact, setContact] = useState<Contact>(
        contactToEdit || { id: 0, fullName: "", email: "", phone: "" }
    );
    const dispatch = useDispatch();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (contactToEdit) {
        dispatch(editContact(contactToEdit.id, contact));
        setContactToEdit(undefined);
        } else {
        dispatch(addContact({ ...contact, id: Date.now() }));
        }
        setContact({ id: 0, fullName: "", email: "", phone: "" });
    };

    return (
        <Form onSubmit={handleSubmit}>
        <Input
            type="text"
            value={contact.fullName}
            onChange={(e) => setContact({ ...contact, fullName: e.target.value })}
            placeholder="Nome Completo"
            required
        />
        <Input
            type="email"
            value={contact.email}
            onChange={(e) => setContact({ ...contact, email: e.target.value })}
            placeholder="E-mail"
            required
        />
        <Input
            type="tel"
            value={contact.phone}
            onChange={(e) => setContact({ ...contact, phone: e.target.value })}
            placeholder="Número de telefone"
            required
        />
        <AddButton type="submit">
            {contactToEdit ? "Salvar" : "Adicionar"}
        </AddButton>
        </Form>
    );
    };

    export default ContactForm;
