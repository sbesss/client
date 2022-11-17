import React from 'react';
import styles from '../css/Information.module.scss';

const Information = (props) => {
  return (
    <div>
      <h2>{props.article}</h2>
      <div className={styles.body}>
        <div className={styles.imgblock}>
          <img src={props.img} alt="xd" />
        </div>
        <div className={styles.textblock}>
          <p className={styles.divstart}>
            Вам требуется перевезти вещи? Наша компания без проблем поможет вам! Имея собственный
            автопарк и грузчиков мы гарантируем всем клиентам точные сроки и высокое качество работ.
            А еще:
          </p>
          <div className={styles.infoblock}>
            <p>
              <img src="https://static.thenounproject.com/png/2528747-200.png" alt="xd" />У нас
              имеются упаковочные материалы, ремни, стяжки
            </p>
            <p>
              <img
                src="https://sun9-27.userapi.com/impg/MFXCEn7shEnaahX4i2UtXixKAjQJEB1NFlHq7g/nuu2IqEVHdI.jpg?size=30x30&quality=96&sign=37704d847a12d60ab52b87262731b248&type=album"
                alt="xd"
              />
              Сильные и ответственные грузчики(только Казань!)
            </p>
            <p>
              <img src="https://cdn-icons-png.flaticon.com/512/109/109613.png" alt="xd" />
              Быстрая подача машины в течении 25 минут
            </p>
            <p>
              <img
                src="https://www.iconpacks.net/icons/1/free-truck-icon-1058-thumb.png"
                alt="xd"
              />
              Разные машины - 3м, 4м, 5м, 6м. Можем перевозить длинные материалы
            </p>
          </div>
          <p>
            А для юридических лиц, у нас имеются все необходимые документы - чеки, отчетность! Также
            у нас удобная система работы (мы работаем как с НДС так и без)
          </p>
          <div className={styles.zakaz}>
            <p>{props.info1}</p>
            <p>{props.info2}</p>
          </div>
          <button onClick={() => props.active(true)}>Заказать Машину</button>
        </div>
      </div>
    </div>
  );
};

export default Information;
