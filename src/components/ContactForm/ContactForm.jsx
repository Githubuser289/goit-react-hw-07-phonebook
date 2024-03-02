import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import styles from './ContactForm.module.css';
import { addContact } from '../../redux/contactsSlice';

function ContactForm() {
  const dispatch = useDispatch();
  let list = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    let name = evt.target[0].value;
    let number = evt.target[1].value;
    if (list.filter(contact => contact.name === name).length > 0) {
      alert(name + ' is already in contacts.');
      return;
    }
    let newContact = {
      name: name,
      number: number,
    };
    dispatch(addContact(newContact));
    document.getElementsByTagName('form')[0].reset();
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div>
        <span>Name</span>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Z]+((['\-][a-zA-Z])?[a-zA-Z]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          autoComplete="off"
          required
        />
      </div>

      <div>
        <span>Number</span>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          autoComplete="off"
          required
        />
      </div>

      <button type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
