/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Carrusel from './slider';
import Cafe from '../../assets/resources/cafe.jpg';
import Kits from '../../assets/resources/kits.jpg';
import Lecturas from '../../assets/resources/lecturas.jpg';
import Product from '../../components/product';

const listproducts = [
  {
    name: 'LECTURA DE BORRA DE CAFÉ • ONLINE •',
    priceOld: 5800,
    price: 5800,
    label: '',
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/455/265/products/0001-7172957354_20210903_201951_00001-ce9966fc6d6d620a0916307118523286-320-0.png'
  },
  {
    name: 'LECTURA DE BORRA DE CAFÉ • PRESENCIAL •',
    priceOld: 7500,
    price: 7500,
    label: '',
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/455/265/products/0001-7172582772_20210903_200859_00001-9727272fa9e670631716307125244068-320-0.png'
  },
  {
    name: 'CAPACITACIÓN LBC PRESENCIAL',
    priceOld: 12500,
    price: 12500,
    label: '',
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/455/265/products/img_286521-36b22129ae62c11bc216470377715509-320-0.jpg'
  },
  {
    name: 'CAPACITACIÓN LBC ONLINE',
    priceOld: 9500,
    price: 7125,
    label: '25% OFF',
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/455/265/products/img_29761-34065042ebaf59b6b016470376774428-320-0.jpg'
  },
  {
    name: 'KIT DJZVE DE COBRE 6 POCILLOS',
    priceOld: 23670,
    price: 23670,
    label: '',
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/455/265/products/img_32091-0ccef3732a17fd1b9c16558454460853-320-0.jpg'
  },
  {
    name: 'BOX DEGUSTACIÓN DE BLENDS HDLP',
    priceOld: 5200,
    price: 5200,
    label: '',
    image: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/455/265/products/img_32511-cb0afbd0a7f3a4a51816565169275477-320-0.jpg'
  },
];

const Home = () => {
  const [products] = useState(listproducts);
  return (
    <div className="home-container">
      <Carrusel />
      <div className="home-container__categories-image">
        <div className="home-container__category-image">
          <img src={Cafe} alt="" />
        </div>
        <div className="home-container__category-image">
          <img src={Kits} alt="" />
        </div>
        <div className="home-container__category-image">
          <img src={Lecturas} alt="" />
        </div>
      </div>
      <h2 className="home-container__text">ELIGE, PAGA Y RECIBE TU PEDIDO SIN MOVERTE DE TU CASA</h2>
      <div className="home-container__products-container">
        <div className="home-container__categories">
          <p className="home-container__text-category">Categorías principales</p>
          <div className="home-container__box-categories">
            <Link to="/shop/lecturas">Lecturas</Link>
            <Link to="/shop/cursos">Cursos</Link>
            <Link to="/shop/cafe">Café</Link>
            <Link to="/shop/cafeteras">Cafeteras</Link>
            <Link to="/shop/kits">Kits</Link>
          </div>
        </div>
        <div className="home-container__products">
          {products.map((item) => (
            <Link key={item.name} to={`/product/${item.name}`}>
              <Product data={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
