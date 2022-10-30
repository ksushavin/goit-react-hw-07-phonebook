import { useState } from 'react'
import { nanoid } from 'nanoid';
import css from 'components/ContactForm/ContactForm.module.css'

export default function ContactForm ({ onSubmit }) {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const nameId = nanoid();
    const phoneId = nanoid();

    const handleNameChange = (e) => {
        setName(e.target.value)
    }

     const handlePhoneChange = (e) => {
        setPhone(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({name, phone});
        resetForm();
    }

    const resetForm = () => {
        setName('');
        setPhone('')
    }
  

    return (
        <form onSubmit={handleSubmit} className={css.form}>
            <label htmlFor={nameId} className={css.label}>Name</label>
            <input
                id={nameId}
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleNameChange}
            />
            <label htmlFor={phoneId} className={css.label}>Number</label>
            <input
                id={phoneId}
                type="tel"
                name="phone"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={phone}
                onChange={handlePhoneChange}
            />
            <button type='submit' className={css.button}>Add contact</button>
        </form>
    )

}
