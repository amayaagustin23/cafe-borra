import React from 'react';
import { Link } from 'react-router-dom';
import {
  ABOUT_PATH, CONTACT_PATH, HOME_PATH, SHOP_PATH
} from '../../routes/path';
import Facebook from '../../assets/icon/facebook.png';
import Instagram from '../../assets/icon/instagram.png';
import Button from '../button';
import Logo from '../../assets/logo/logo.png';

const Footer = () => (
  <div className="footer-container">
    <div className="footer-container__body">
      <div className="footer-container__nav">
        <h3>NAVEGACIÓN</h3>
        <div className="footer-container__nav">
          <Link className="footer-container__route" to={HOME_PATH}>Inicio</Link>
          <Link className="footer-container__route" to={SHOP_PATH}>Productos</Link>
          <Link className="footer-container__route" to={CONTACT_PATH}>Contacto</Link>
          <Link className="footer-container__route" to={ABOUT_PATH}>Quien soy</Link>
        </div>
      </div>
      <div>
        <h3>REDES SOCIALES</h3>
        <div className="footer-container__socials">
          <Link to="https://www.facebook.com/hijade.lapolvora/">
            <img src={Facebook} alt="facebook" width="35" />
          </Link>
          <Link to="https://www.instagram.com/hijadelapolvora/">
            <img src={Instagram} alt="instagram" width="35" />
          </Link>
        </div>
        <h3>NEWSLETTER</h3>
        <div className="footer-container__email">
          <input placeholder="Email" />
          <Button email />
        </div>
      </div>
      <div>
        <img src={Logo} alt="logo" width="200" />
      </div>
    </div>
    <div className="footer-container__copy">
      <p>
        COPYRIGHT HIJA DE LA PÓLVORA - 2022. TODOS LOS DERECHOS RESERVADOS.
        <Link className="footer-container__link-copy" to="https://autogestion.produccion.gob.ar/consumidores">INGRESE AQUÍ</Link>
      </p>
    </div>
  </div>
);

export default Footer;
