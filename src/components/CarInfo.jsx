import React from 'react';
import styles from '../css/CarInfo.module.scss';

function CarInfo(props) {
  return (
    <div>
      <h2>{props.article}</h2>
      <div className={styles.body}>
        <div className={styles.imgblock}>
          <img src={props.img} alt="xd" />
        </div>
        <div className={styles.textblock}>
          <div className={styles.parameters}>
            <p>{props.gruz}</p>
            <p>{props.length}</p>
            <p>{props.width}</p>
            <p>{props.height}</p>
            <p>{props.size}</p>
          </div>
          <div className={styles.infoblock}>
            <p>
              <img src="https://static.thenounproject.com/png/2528747-200.png" alt="xd" />У нас
              имеются упаковочные материалы, ремни, стяжки
            </p>
            <p>
              <img src="https://cdn-icons-png.flaticon.com/512/33/33308.png" alt="xd" />
              Сильные и ответственные грузчики
            </p>
            <p>
              <img src="https://cdn-icons-png.flaticon.com/512/109/109613.png" alt="xd" />
              Быстрая подача машины в течении 25 минут
            </p>
          </div>
          <div className={styles.zakaz}>
            <p>{props.info1}</p>
            <p>{props.info2}</p>
          </div>
          <button onClick={() => props.active(true)}>Заказать Машину</button>
        </div>
      </div>
    </div>
  );
}

export default CarInfo;
