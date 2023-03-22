import { useEffect } from 'react';

import styles from './TodoItem.module.css';
import '../../App.css';
import useChangeHanlder from '../../hooks/useChangeHanlder';

const TodoItem = ({ todo }) => {
  const { values, changeHanlder } = useChangeHanlder({
    title: todo.title
  });

  useEffect(() => {
    console.log('mount');

    return () => {
      console.log('unmount');
    };
  });

  return (
    <li>
      <form >
        <input type="text" name='title' value={values.title} onChange={changeHanlder} />
        <input type="submit" value='save' />
      </form>
      <>
        <span style={{ textDecoration: todo.isMarked ? 'line-through' : '' }} >
          {todo.title}
        </span>
        <button className={`btn ${styles['edit-btn']}`} >edit</button >
        <button className={`btn ${styles['delete-btn']}`} >delete</button>
        <button className={`btn ${styles['mark-btn']}`} >mark</button>
      </>
    </li >
  );
};

export default TodoItem;

