import React from 'react';
import styles from '../css/MainPage.module.scss';
import InfoBlock from './InfoBlock.jsx';
import Cars from './Cars.jsx';

function MainPage() {
  return (
    <div className={styles.body}>
      <div className={styles.info}>
        <div className="clear"></div>
        <h1>
          Грузоперевозки по Казани, Республике Татарстан
          <br /> и всей России круглосуточно.
        </h1>
        <div className="clear"></div>
      </div>
      <div className={styles.content}>
        <InfoBlock
          title="Квартирный и офисный переезд"
          img="img/kvart-pereezd.jpg"
          to="uslugi-i-tseny/pereezd"
        />
        <InfoBlock
          title="Грузовое такси, перевозка грузов"
          img="img/gruztaxi.jpg"
          to="uslugi-i-tseny/perevozka-gruzov"
        />
        <InfoBlock
          title="Грузоперевозки по межгороду"
          img="https://sun9-53.userapi.com/impg/A14D7puGWRpKm1Ur5lPh_y8HWHM9lHA8uhu1lw/7m3uaJiaR2k.jpg?size=235x170&quality=96&sign=892a8c99996e6220b6fd27808f80c726&type=album"
          to="uslugi-i-tseny/gazel-mezhgorod"
        />
        <InfoBlock
          title="Организациям и корпоративным клиентам"
          img="https://sun9-80.userapi.com/impg/Sz6vb7uUrQjs5zJfiFReY4y-wTeo8qQ2t0AMAg/A4a9EdrkMOM.jpg?size=235x170&quality=96&sign=510940d4ed0299f59f55fa68d9a34bde&type=album"
          to="for-org"
        />
      </div>
      <Cars />
      <div>
        <div>
          <h2>Наш автопарк</h2>
        </div>
        <div className={styles.list}>
          <InfoBlock title="Трёхтонник" img="img/3htonnik.png" to="nash-autopark/3tonnik" />
          <InfoBlock title="Пятитонник" img="img/5tonnik.jpg" to="nash-autopark/5tonnik" />
          <InfoBlock title="Семитонник" img="/img/7tonnik.jpg" to="nash-autopark/7tonnik" />
          <InfoBlock title="Десятитонник" img="img/10tonnik.jpg" to="nash-autopark/10tonnik" />
          <InfoBlock title="Фура" img="img/fura20tonn.jpg" to="nash-autopark/fura20tonn" />
          <InfoBlock
            title="Газель 3 метра"
            img="img/gazel3metra.jpg"
            to="nash-autopark/gazel3metra"
          />
          <InfoBlock
            title="Газель 4 метра"
            img="img/gazel4metra.jpg"
            to="nash-autopark/gazel4metra"
          />
          <InfoBlock
            title="Газель 5 метров"
            img="img/gazel5metrov.jpg"
            to="nash-autopark/gazel5metrov"
          />
          <InfoBlock
            title="Газель 6 метров"
            img="img/gazel6metrov.jpg"
            to="nash-autopark/gazel6metrov"
          />
          <InfoBlock
            title="Газель рефрижератор"
            img="img/gazel4metra.jpg"
            to="nash-autopark/gazel-refrigerator"
          />
        </div>
      </div>
    </div>
  );
}

export default MainPage;
