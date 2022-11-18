import React from 'react';
import styles from '../css/Header.module.scss';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img width="38" src="img/test1.png" alt="logo" />
        </Link>
      </div>
      <p>
        Работаем
        <br />
        круглосуточно!
      </p>
      <div className={styles.messengers}>
        <p>Viber и Whatsapp для заказа:</p>
        <h4>8 (905) 370-56-62</h4>
      </div>
      <div className={styles.phone}>
        <p>Нужна машина?</p>
        <h4>8 (905) 370-56-62</h4>
        <p>Звонки принимаем с 8:00 до 23:00</p>
      </div>
    </div>
  );
}

export default Header;
