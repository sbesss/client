import React from 'react';
import styles from '../css/Cars.module.scss';

function Text(props) {
  return (
    <div className={styles.info}>
      <p>
        <img src={props.img} border="0" alt="" />
        {props.text}
      </p>
    </div>
  );
}

function Cars() {
  return (
    <div className={styles.body}>
      <Text
        img="https://cdn-icons-png.flaticon.com/512/109/109613.png"
        text="Быстрая и качественная перевозка!"
      />
      <Text
        img="https://www.iconpacks.net/icons/1/free-truck-icon-1058-thumb.png"
        text="Мы не диспетчеры, у нас собственный автопарк!"
      />
      <Text
        img="https://i.pinimg.com/originals/fe/e9/f9/fee9f9577c20c9f841ac55b9c6237795.png"
        text="Низкие цены!"
      />
    </div>
  );
}
export default Cars;
