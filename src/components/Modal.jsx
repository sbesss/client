import React from 'react';
import '../css/Modal.scss';
import axios from 'axios';

function Modal({ active, setActive }) {
  const [phone, setPhone] = React.useState('');
  const [city1, setCity1] = React.useState('');
  const [city2, setCity2] = React.useState('');
  const [street1, setStreet1] = React.useState('');
  const [street2, setStreet2] = React.useState('');
  const [size, setSize] = React.useState('');
  const [weight, setWeight] = React.useState('');

  function afterSending() {
    window.alert('Данные отправлены, спасибо!');
  }

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      phone,
      city1,
      city2,
      street1,
      street2,
      size,
      weight,
    };
    const response = await axios.post('http://localhost:8080/sendmail', data);
    console.log(response.data);
  };
  return (
    <div className={active ? 'modal actiive' : 'modal'} onClick={() => setActive(false)}>
      <div
        className={active ? 'modal_content actiive' : 'modal_content'}
        onClick={(e) => e.stopPropagation()}>
        <h4>Заказать обратный звонок</h4>
        <form className="siteform" onSubmit={sendEmail}>
          <p>Ваш номер</p>
          <input
            className="input"
            type="number"
            id="phone"
            required="required"
            placeholder="8 (999) 999-99-99"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}></input>
          <div className="clear"></div>
          <p>Данные ниже вводить необязательно, вы можете сказать их по телефону.</p>
          <div>
            <p>Откуда:</p>
            <input
              className="input"
              type="text"
              id="city1"
              placeholder="Город"
              value={city1}
              onChange={(e) => setCity1(e.target.value)}></input>
            <input
              className="input"
              type="text"
              id="street1"
              placeholder="Улица"
              value={street1}
              onChange={(e) => setStreet1(e.target.value)}></input>
            <p>Куда:</p>
            <input
              className="input"
              type="text"
              id="city2"
              placeholder="Город"
              value={city2}
              onChange={(e) => setCity2(e.target.value)}></input>
            <input
              className="input"
              type="text"
              id="street2"
              placeholder="Улица"
              value={street2}
              onChange={(e) => setStreet2(e.target.value)}></input>
            <p>Габариты:</p>
            <input
              className="input"
              type="text"
              id="size"
              placeholder="Длина x Ширина x Высота"
              value={size}
              onChange={(e) => setSize(e.target.value)}></input>
            <p>Примерный вес:</p>
            <input
              className="input"
              type="text"
              id="weight"
              placeholder="Вес"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}></input>
          </div>
          <button type="submit" className="submit" onClick={afterSending}>
            Отправить
          </button>
        </form>
      </div>
    </div>
  );
}

export default Modal;
