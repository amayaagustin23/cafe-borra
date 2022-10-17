import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ data }) => (
  <div className="product-container">
    <div className="product-container__box-image">
      <img className="product-container__image" src={data.image} alt={data.name} />
      {data.label !== '' && <p className="product-container__label">{data.label}</p> }
    </div>
    <div className="product-container__text">
      <p className="product-container__name">{data.name}</p>
      {data.price !== data.priceOld
        ? (
          <div className="product-container__price-container">
            <p className="product-container__price--old">
              $
              {new Intl.NumberFormat('de-DE').format(data.priceOld)}
            </p>
            <hr />
            <p className="product-container__price">
              $
              {new Intl.NumberFormat('de-DE').format(data.price)}
            </p>
          </div>
        )
        : (
          <p className="product-container__price">
            $
            {new Intl.NumberFormat('de-DE').format(data.price)}
          </p>
        )}
    </div>
  </div>
);
Product.propTypes = {
  data: PropTypes.objectOf.isRequired
};
export default Product;
