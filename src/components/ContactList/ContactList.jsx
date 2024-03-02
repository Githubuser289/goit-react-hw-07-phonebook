import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

function ContactList() {
  const dispatch = useDispatch();
  let list = useSelector(getContacts);
  let filter = useSelector(getFilter);

  function handleClick(evt) {
    dispatch(deleteContact(evt.target.id));
  }

  return (
    <ul>
      {list
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(contact => (
          <li key={contact.id}>
            {contact.name}: {contact.phone}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button
              className={styles.delete}
              onClick={handleClick}
              id={contact.id}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}

export default ContactList;
