import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from '../../redux/selectors';
import { deleteContact } from '../../redux/operations';

function ContactList() {
  const dispatch = useDispatch();
  let list = useSelector(selectVisibleContacts);

  function handleClick(evt) {
    dispatch(deleteContact(evt.target.id));
  }

  return (
    <ul>
      {list.map(contact => (
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
