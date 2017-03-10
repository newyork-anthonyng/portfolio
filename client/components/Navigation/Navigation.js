import React from 'react';
import { Link } from 'react-router';
import styles from './Navigation.css';
import HoverableLogo from '../HoverableLogo/HoverableLogo'

const Navigation = () => {
  return (
    <nav>
      <HoverableLogo theme="black" />
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
