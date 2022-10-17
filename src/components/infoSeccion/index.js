import React from 'react';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';

const Info = () => (
  <div className="info-container">
    <div className="info-container__box">
      <LocalShippingOutlinedIcon className="info-container__icon" />
      <div className="info-container__text">
        <p className="info-container__text-main">ENVIAMOS TU COMPRA</p>
        <p className="info-container__text-secondary">Entregas a todo el país</p>
      </div>
    </div>
    <hr className="info-container__line" />
    <div className="info-container__box">
      <CreditCardOutlinedIcon className="info-container__icon" />
      <div className="info-container__text">
        <p className="info-container__text-main">PAGÁ COMO QUIERAS</p>
        <p className="info-container__text-secondary">Tarjetas de crédito o efectivo</p>
      </div>
    </div>
    <hr className="info-container__line" />
    <div className="info-container__box">
      <LockOutlinedIcon className="info-container__icon" />
      <div className="info-container__text">
        <p className="info-container__text-main">COMPRÁ CON SEGURIDAD</p>
        <p className="info-container__text-secondary">Tus datos siempre protegidos</p>
      </div>
    </div>
  </div>
);

export default Info;
