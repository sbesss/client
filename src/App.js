import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';

import Modal from './components/Modal';
import Header from './components/Header.jsx';
import MainPage from './components/MainPage.jsx';
import Prices from './components/Prices.jsx';
import ForOrg from './components/ForOrg.jsx';
import Footer from './components/Footer.jsx';
import Question from './components/Question.jsx';
import Navbar from './components/Navbar.jsx';
import Information from './components/Information';
import CarInfo from './components/CarInfo';

function App() {
  const [modalActive, setModalActive] = React.useState(false);

  return (
    <div className="wrapper">
      <Header />
      <Navbar />
      <div className="content">
        <div className="container">
          <Modal active={modalActive} setActive={setModalActive} />
          <Routes>
            <Route path="/" element={<MainPage active={setModalActive} />} />
            <Route path="uslugi-i-tseny" element={<Prices active={setModalActive} />} />
            <Route path="for-org" element={<ForOrg active={setModalActive} />} />
            <Route
              path="uslugi-i-tseny/pereezd"
              element={
                <Information
                  active={setModalActive}
                  img="/img/kvart-pereezd.jpg"
                  article="Квартирный, офисный, дачный переезд"
                />
              }
            />
            <Route
              path="uslugi-i-tseny/perevozka-gruzov"
              element={
                <Information
                  img="/img/for1/gruztaxi.jpg"
                  article="Грузовое такси, перевозка грузов"
                  active={setModalActive}
                />
              }
            />
            <Route
              path="uslugi-i-tseny/gazel-mezhgorod"
              element={
                <Information
                  active={setModalActive}
                  img="https://www.yarcom.ru/sites/default/files/styles/1600x1600/public/services/photo/2017/01/gG3ZBaX-y1iDsbQ.jpg.webp?itok=6d8Cvoe4"
                  article="Грузоперевозки газель межгород"
                />
              }
            />
            <Route
              path="uslugi-i-tseny/gruzchiki"
              element={
                <Information
                  active={setModalActive}
                  img="https://sun9-87.userapi.com/impg/dkHNurWupetMWuCTnqBKMAjN7aoC6ei6gP4XIQ/1Zwog95tJTI.jpg?size=235x170&quality=96&sign=97950671a73ee536b68fb031acf598ba&type=album"
                  article="Грузчики"
                />
              }
            />
            <Route path="for-org" element={<Information />} />
            <Route
              path="nash-autopark/3tonnik"
              element={
                <CarInfo
                  active={setModalActive}
                  img="/img/for1/3htonnik.png"
                  article="Трёхтонник"
                  gruz="Грузоподъёмность: до 3 тонн"
                  length="Длина: 6.1 метра"
                  width="Ширина: 2.45 метра"
                  height="Высота: 2.6 метра"
                  size="Объёмы фургона: 39 куб. метров"
                  info1="Город 1000 руб/час, минимум 3 часа"
                  info2="Межгород 25 рублей за километр"
                />
              }
            />
            <Route
              path="nash-autopark/5tonnik"
              element={
                <CarInfo
                  active={setModalActive}
                  img="/img/for1/5tonnik.jpg"
                  article="Пятитонник"
                  gruz="Грузоподъёмность: до 5 тонн"
                  length="Длина: 7.1 метра"
                  width="Ширина: 2.48 метра"
                  height="Высота: 2.5 метра"
                  size="Объёмы фургона: 44 куб. метров"
                  info1="Город 1000 руб/час, минимум 3 часа"
                  info2="Межгород 25 рублей за километр"
                />
              }
            />
            <Route
              path="nash-autopark/7tonnik"
              element={
                <CarInfo
                  active={setModalActive}
                  img="/img/for1/7tonnik.jpg"
                  article="Семитонник"
                  gruz="Грузоподъёмность: до 7 тонн"
                  length="Длина: 7.2 метра"
                  width="Ширина: 2.48 метра"
                  height="Высота: 2.75 метра"
                  size="Объёмы фургона: 49 куб. метра"
                  info1="Город 1000 руб/час, минимум 3 часа"
                  info2="Межгород 25 рублей за километр"
                />
              }
            />
            <Route
              path="nash-autopark/10tonnik"
              element={
                <CarInfo
                  active={setModalActive}
                  img="/img/for1/10tonnik.jpg"
                  article="Десятитонник"
                  gruz="Грузоподъёмность: до 10 тонн"
                  length="Длина: 6.1 метра"
                  width="Ширина: 2.45 метра"
                  height="Высота: 2.6 метра"
                  size="Объёмы фургона: 39 куб. метров"
                  info1="Город 1000 руб/час, минимум 3 часа"
                  info2="Межгород 25 рублей за километр"
                />
              }
            />
            <Route
              path="nash-autopark/fura20tonn"
              element={
                <CarInfo
                  active={setModalActive}
                  img="/img/for1/fura20tonn.jpg"
                  article="Фура"
                  gruz="Грузоподъёмность: до 20 тонн"
                  length="Длина: 13.6 метра"
                  width="Ширина: 2.48 метра"
                  height="Высота: 2.75 метра"
                  size="Объёмы фургона: 93 куб. метров"
                  info1="Город 1000 руб/час, минимум 3 часа"
                  info2="Межгород 25 рублей за километр"
                />
              }
            />
            <Route
              path="nash-autopark/gazel3metra"
              element={
                <CarInfo
                  active={setModalActive}
                  img="/img/for1/gazel3metra.jpg"
                  article="Газель 3 метра"
                  gruz="Грузоподъёмность: до 2 тонн"
                  length="Длина: 3 метра"
                  width="Ширина: 2 метра"
                  height="Высота: 1.65 метра"
                  size="Объёмы фургона: 10 куб. метров"
                  info1="Стоимость уточните у оператора"
                  info2="или закажите обратный звонок"
                />
              }
            />
            <Route
              path="nash-autopark/gazel4metra"
              element={
                <CarInfo
                  active={setModalActive}
                  img="/img/for1/gazel4metra.jpg"
                  article="Газель 4 метра"
                  gruz="Грузоподъёмность: до 2 тонн"
                  length="Длина: 4 метра"
                  width="Ширина: 2 метра"
                  height="Высота: 2.1 метра"
                  size="Объёмы фургона:  16 куб. метров"
                  info1="Стоимость уточните у оператора"
                  info2="или закажите обратный звонок"
                />
              }
            />
            <Route
              path="nash-autopark/gazel5metrov"
              element={
                <CarInfo
                  active={setModalActive}
                  img="/img/for1/gazel5metrov.jpg"
                  article="Газель 5 метров"
                  gruz="Грузоподъёмность: до 2 тонн"
                  length="Длина: 5 метра"
                  width="Ширина: 2.2 метра"
                  height="Высота: 2.2 метра"
                  size="Объёмы фургона: 24 куб. метров"
                  info1="Стоимость уточните у оператора"
                  info2="или закажите обратный звонок"
                />
              }
            />
            <Route
              path="nash-autopark/gazel6metrov"
              element={
                <CarInfo
                  active={setModalActive}
                  img="/img/for1/gazel6metrov.jpg"
                  article="Газель 6 метров"
                  gruz="Грузоподъёмность: до 2 тонн"
                  length="Длина: 6.1 метра"
                  width="Ширина: 2.2 метра"
                  height="Высота: 2.3 метра"
                  size="Объёмы фургона: 31 куб. метров"
                  info1="Стоимость уточните у оператора"
                  info2="или закажите обратный звонок"
                />
              }
            />
            <Route
              path="nash-autopark/gazel-refrigerator"
              element={
                <CarInfo
                  active={setModalActive}
                  img="/img/for1/gazel4metra.jpg"
                  article="Газель Рефрижератор"
                  gruz="Грузоподъёмность: до 2 тонн"
                  length="Длина: 6.1 метра"
                  width="Ширина: 2.2 метра"
                  height="Высота: 2.3 метра"
                  size="Объёмы фургона: 31 куб. метров"
                  info1="Стоимость уточните у оператора"
                  info2="или закажите обратный звонок"
                />
              }
            />
          </Routes>
        </div>
        <div className="clear"></div>
        <Question active={setModalActive} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
