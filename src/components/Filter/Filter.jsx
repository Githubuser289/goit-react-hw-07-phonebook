import { useDispatch } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';
import styles from './Filter.module.css';

function Filter() {
  const dispatch = useDispatch();

  const handleFilterChange = evt => {
    const filter = evt.target.value.toLowerCase();
    dispatch(setFilter(filter));
  };

  return (
    <div className={styles.div}>
      <p>Find contacts by name</p>
      <input type="text" name="filter" onChange={handleFilterChange} required />
    </div>
  );
}

export default Filter;
