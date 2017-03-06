import React from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';

const Navigation = () => {
  return (
    <nav>
      <ul className={styles.list}>
        <li>
          <Link to="/work" activeClassName={styles.activeLink}>Work</Link>
        </li>
        <li>
          <Link to="/projects">Projects</Link>
        </li>
        <li>
          <Link to="/articles">Articles</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
