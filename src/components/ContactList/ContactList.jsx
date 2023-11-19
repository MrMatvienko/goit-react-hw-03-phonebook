import { BtnDelete, Item, StylePar, StyledUl } from './ContactList.styled';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <StyledUl>
        {contacts.map(contact => (
          <Item key={contact.id}>
            <StylePar>{contact.name}</StylePar>
            <StylePar>{contact.number}</StylePar>
            <BtnDelete onClick={() => deleteContact(contact.id)}>
              Delete
            </BtnDelete>
          </Item>
        ))}
      </StyledUl>
    </div>
  );
};
