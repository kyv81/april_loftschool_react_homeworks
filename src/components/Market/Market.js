import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Order from 'components/Order';
import { connect } from 'react-redux';
import {
  createOrder,
  moveOrderToFarm,
} from 'actions/marketActions';
import './Market.css';

let id = 0;

const getId = () => {
  id += 1;
  return id;
};

export const vegetables = [
  'Капуста',
  'Редиска',
  'Огурцы',
  'Морковь',
  'Горох',
  'Баклажан',
  'Тыква',
  'Чеснок',
  'Лук',
  'Перец',
  'Картофель',
  'Редька',
];

const getNewOrder = () => {
  return {
    id: getId(),
    name:
      vegetables[
        Math.floor(Math.random() * vegetables.length)
      ],
    price: 100 + Math.floor(Math.random() * 100),
    createdAt: new Date(),
  };
};

export class Market extends Component {
  static propTypes = {
    createOrder: PropTypes.func.isRequired,
    moveOrderToFarm: PropTypes.func.isRequired,
    market: PropTypes.array.isRequired,
  };

  render() {
    const {
      createOrder,
      moveOrderToFarm,
      market,
    } = this.props;

    return (
      <div className="market">
        <h2>Новые заказы в магазине</h2>
        <button
          className="new-orders__create-button"
          onClick={() => createOrder(getNewOrder())}
        >
          Создать заказ
        </button>
        <button
          disabled={!market.length}
          onClick={() => {
            moveOrderToFarm(market[market.length - 1]);
          }}
        >
          Отправить заказ на ферму
        </button>
        <div className="order-list">
          {market.map(order => (
            <Order
              key={order.id}
              name={order.name}
              price={order.price}
              createdAt={order.createdAt.toTimeString()}
            />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  market: state.market.orders,
});
const mapDispatchToProps = {
  createOrder,
  moveOrderToFarm,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Market,
);
