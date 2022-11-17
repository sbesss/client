import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Footer.module.scss';

function Footer() {
  return (
    <div className={styles.list}>
      <ul>
        <Link to="/">
          <li>Главная</li>
        </Link>
        <Link to="uslugi-i-tseny">
          <li>Услуги и цены</li>
        </Link>
        <Link to="for-org">
          <li>Организациям</li>
        </Link>
        <p className={styles.gazel}>Наш номер 8 (905) 370-56-62</p>
      </ul>
    </div>
  );
}

export default Footer;
