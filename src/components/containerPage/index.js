import React from 'react';
import PropTypes from 'prop-types';
import Footer from '../footer';
import Navbar from '../navbar';
import Info from '../infoSeccion';
import Whatsapp from '../../assets/icon/whatsapp.png';

const PageContainer = ({ children }) => (
  <div>
    <Navbar />
    <main className="page-Container">{children}</main>
    <Info />
    <a target="_blank" className="page-Container__whatsapp" href="https://api.whatsapp.com/send/?phone=5491123142364&text&type=phone_number&app_absent=0" rel="noreferrer">
      <img className="page-Container__whatsapp-logo" src={Whatsapp} alt="whatsapp" />
    </a>
    <Footer />
  </div>
);

PageContainer.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageContainer;
