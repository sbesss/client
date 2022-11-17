import React from 'react';
import styles from '../css/ForOrg.module.scss';

function ForOrg(props) {
  return (
    <div>
      <h2>Организациям и корпоративным клиентам</h2>
      <div className={styles.maincontent}>
        <div className={styles.imagebutton}>
          <img
            src="https://www.oliverbaby.ru/upload/iblock/4f9/4f9b73c787bc0647b1efc861b6e17438.png"
            alt=""
          />
          <button onClick={() => props.active(true)}>
            Хотите получить коммерческое предложение?
          </button>
        </div>
        <div className={styles.textdiv}>
          <span>
            Мы работаем со многими организациями которые в последствии становятся нашими постоянными
            клиентами. Имея собственный автопарк и налаженную годами систему логистики, наши клиенты
            работая с нами получают:
          </span>
          <ul>
            <li>
              <img
                src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"
                alt={1}
              />
              Наличная и безналичная форма оплаты. Работаем как с НДС так и без НДС.
            </li>
            <li>
              <img
                src="https://cdn2.iconfinder.com/data/icons/flat-ui-icons-24-px/24/checkmark-24-512.png"
                alt=""
              />
              Заключение договоров, все необходимые для бухгалтерии документы.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ForOrg;
