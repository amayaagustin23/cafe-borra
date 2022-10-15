import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../search';
import Logo from '../../assets/logo/logo.png';
import {
  ABOUT_PATH, CONTACT_PATH, HOME_PATH, SHOP_PATH
} from '../../routes/path';

const Navbar = () => {
  const [logued, setLogued] = useState(false);
  // const [user, setUser] = useState(false);
  useEffect(() => {
    setLogued(true);
  }, []);
  const pages = [
    {
      route: HOME_PATH,
      title: 'INICIO'
    },
    {
      route: SHOP_PATH,
      title: 'PRODUCTOS'
    },
    {
      route: CONTACT_PATH,
      title: 'CONTACTO'
    },
    {
      route: ABOUT_PATH,
      title: 'QUIEN SOY'
    }
  ];
  return (
    <div className="navbar-container">
      <div className="navbar-container__header">
        <p className="navbar-container__header-text">Envios Gratuitos en compras mayores a $5000 en CABA</p>
      </div>
      <div className="navbar-container__box">
        <div className="navbar-container__box-nav">
          <div className="navbar-container__box-search">
            <Search />
          </div>
          <div>
            <img className="navbar-container__logo" src={Logo} alt="logo" />
          </div>
          <div>
            {logued
              ? (
                <div className="navbar-container__user-register">
                  <Link className="navbar-container__user-box" to="/register">
                    <AccountCircleIcon className="navbar-container__icon-user" />
                    <p className="navbar-container__text-user">¡HOLA, Agustin!</p>
                  </Link>
                  <hr />
                  <Link to="/login">Cerrar Session</Link>
                </div>
              )
              : (
                <div className="navbar-container__user-register">
                  <Link to="/register">Crear cuenta</Link>
                  <hr />
                  <Link to="/login">Iniciar Session</Link>
                </div>
              )}
          </div>
        </div>
        <div className="navbar-container__box-routes">
          {pages.map((item) => (
            <NavLink key={item.title} className="navbar-container__route" to={item.route}>
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
