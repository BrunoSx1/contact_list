import React, { useState } from "react";
import ContactForm, { Contact } from "./components/ContactForm";
import ContactList from "./components/ContactList";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const App: React.FC = () => {
  const [contactToEdit, setContactToEdit] = useState<Contact | undefined>(
    undefined
  );

  return (
    <Container>
      <h1>Lista de Contato</h1>
      <ContactForm contactToEdit={contactToEdit} setContactToEdit={setContactToEdit} />
      <ContactList setContactToEdit={setContactToEdit} />
    </Container>
  );
};

export default App;
