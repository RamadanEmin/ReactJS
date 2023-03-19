import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => {
  const setNavStyle = ({ isActive }) => {
    return isActive
      ? styles['active-link']
      : null;
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" className={setNavStyle}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={setNavStyle} >About</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;