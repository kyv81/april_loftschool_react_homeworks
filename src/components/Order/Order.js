import React from 'react';
import PropTypes from 'prop-types';
import './Order.css';

const Order = ({ name, price, createdAt }) => (
  <div className="order">
    <div className="order__upper">
      <p className="p--order">Название: {name}</p>
      <p className="p--order">Цена: {price}</p>
    </div>
    <div className="order__lower">
      <p className="p--order">Создан: {createdAt}</p>
    </div>
  </div>
);

Order.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  createdAt: PropTypes.string.isRequired,
};

export default Order;
