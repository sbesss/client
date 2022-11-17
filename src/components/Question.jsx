import React from 'react';
import styles from '../css/Question.module.scss';

function Question(props) {
  return (
    <div className={styles.questiondiv}>
      <div classname={styles.call}>
        Возникли вопросы? Хотите заказать машину?
        <br /> Звоните! Работаем круглосуточно!
      </div>
      <div className={styles.number}>8 (905) 370-56-62</div>
      <button onClick={() => props.active(true)}>Заказать обратный звонок</button>
    </div>
  );
}

export default Question;
