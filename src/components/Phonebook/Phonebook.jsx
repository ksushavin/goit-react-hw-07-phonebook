
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addContact, removeContact } from 'redux/contacts-operations';
import { getFilterFromState } from 'redux/selectors';
import { getFilteredContacts } from 'components/getFilteredContacts';
import { setFilter } from 'redux/filter-slice';
import { fetchContacts } from "redux/contacts-operations";
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import Filter from '../Filter/Filter';
import css from 'components/Phonebook/Phonebook.module.css'

export default function Phonebook() {
    const contacts = useSelector(getFilteredContacts);
    const filter = useSelector(getFilterFromState);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch])

    const onAddContact = (data) => {
        const action = addContact(data);
        dispatch(action);
    }

    const onRemoveContact = (id) => {
        const action = removeContact(id);
        dispatch(action);
    }

    const handleFilterChange = (e) => {
        const { value } = e.target;
        dispatch(setFilter(value));
    }


   return (
        <>
            <div className={css.contactForm}>
                <h1 className={css.title}>Phonebook</h1>
                <ContactForm onSubmit={onAddContact} />
            </div>
            <div className={css.contactsWrapper}>
                <h2 className={css.title}>Contacts</h2>
                <Filter onChange={handleFilterChange} value={filter} />
                
                {contacts.length>0 && (<ContactList items={contacts} removeContact={onRemoveContact} />)}
            </div>
        </>
    )
}