import React from 'react';
import InfoBlock from './InfoBlock.jsx';
import styles from '../css/Prices.module.scss';
import { Link } from 'react-router-dom';

function Prices() {
  return (
    <div>
      <h4>Услуги и цены</h4>
      <div className={styles.content}>
        <InfoBlock title="Квартирный и офисный переезд" img="img/kvart-pereezd.jpg" to="pereezd" />
        <InfoBlock
          title="Грузовое такси, перевозка грузов"
          img="img/gruztaxi.jpg"
          to="perevozka-gruzov"
        />
        <InfoBlock
          title="Грузоперевозки по межгороду"
          img="https://sun9-53.userapi.com/impg/A14D7puGWRpKm1Ur5lPh_y8HWHM9lHA8uhu1lw/7m3uaJiaR2k.jpg?size=235x170&quality=96&sign=892a8c99996e6220b6fd27808f80c726&type=album"
          to="gazel-mezhgorod"
        />
        <InfoBlock
          title="Услуги грузчиков"
          img="https://sun9-87.userapi.com/impg/dkHNurWupetMWuCTnqBKMAjN7aoC6ei6gP4XIQ/1Zwog95tJTI.jpg?size=235x170&quality=96&sign=97950671a73ee536b68fb031acf598ba&type=album"
          to="gruzchiki"
        />
      </div>
      <div className="clear"></div>
      <div className={styles.textblock}>
        <p>
          Если вы представитель организации, и вам нужен партнер в сфере логистики, то мы предлагаем
          очень выгодные условия сотрудничества.
        </p>
        <div className="clear"></div>
        <Link to="/for-org">Перейди в раздел организациям →</Link>
      </div>
    </div>
  );
}

export default Prices;
