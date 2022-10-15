/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import Slider from 'react-slick';

const Carrusel = () => {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
  };
  return (
    <div>
      <Slider {...settings}>
        <img className="image-carrusel" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/455/265/themes/new_linkedman/1-slide-1610815988445-7622904583-0bcaba7da17a49119a599fda632121141610816010-1920-1920.webp?1058623147" />
        <img className="image-carrusel" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/455/265/themes/new_linkedman/1-slide-1610815988447-5027784377-1ea87529ad4164c1b86d3497111dd7301610816013-1920-1920.webp?1058623147" />
        <img className="image-carrusel" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/455/265/themes/new_linkedman/1-slide-1610815988449-3489941282-8a221beddc46c73e452b75473b8d2dff1610816014-1920-1920.webp?1058623147" />
        <img className="image-carrusel" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/455/265/themes/new_linkedman/1-slide-1611687257556-5669889212-70463cbd332ef931e8381166e91fc3f31611687262-1920-1920.webp?1058623147" />
      </Slider>

    </div>
  );
};

export default Carrusel;
