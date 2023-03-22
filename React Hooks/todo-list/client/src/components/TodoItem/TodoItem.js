import { useEffect } from 'react';

import styles from './TodoItem.module.css';
import '../../App.css';

const TodoItem = ({ todo }) => {

  useEffect(() => {
    console.log('mount');

    return () => {
      console.log('unmount');
    };
  });

  return (
    <li>
      {editMode
        ? <form >
          <input type="text" name='title' />
          <input type="submit" value='save' />
        </form>
        : <>
          <span style={{ textDecoration: todo.isMarked ? 'line-through' : '' }} >
            {todo.title}
          </span>
          <button className={`btn ${styles['edit-btn']}`} >edit</button >
          <button className={`btn ${styles['delete-btn']}`} >delete</button>
          <button className={`btn ${styles['mark-btn']}`} >mark</button>
        </>
      }
    </li >
  );
};

export default TodoItem;