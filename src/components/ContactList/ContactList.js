import { useDispatch, useSelector } from 'react-redux';

import {
  Contact,
  ContactTitle,
  ContactBtn,
  ContactListUl,
} from './ContactList.styled';

import { deleteContact } from 'redux/contactSlice';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  const filter = useSelector(state => state.filters);
  const dispatch = useDispatch();

  const contactsFilteredByName = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const deleteContacts = id => dispatch(deleteContact(id));
  return (
    <>
      {contactsFilteredByName.length === 0 && (
        <p style={{ marginTop: '10px', color: 'red' }}>
          Your contacts 
        </p>
      )}
      <ContactListUl>
        {contactsFilteredByName?.map(({ name, number, id }) => (
          <Contact key={id}>
            <ContactTitle>• {name}:</ContactTitle>
            <p>{number}</p>
            <ContactBtn type="button" onClick={() => deleteContacts(id)}>
              Delete
            </ContactBtn>
          </Contact>
        ))}
      </ContactListUl>
    </>
  );
};
