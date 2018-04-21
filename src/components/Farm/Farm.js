import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Order from 'components/Order';
import { connect } from 'react-redux';
import { moveOrderToCustomer } from 'actions/farmActions';
import './Farm.css';

export class Farm extends Component {
  static propTypes = {
    farm: PropTypes.array.isRequired,
    moveOrderToCustomer: PropTypes.func.isRequired,
  };

  handleClickMoveOrder = () => {
    const { farm, moveOrderToCustomer } = this.props;
    moveOrderToCustomer(farm[farm.length - 1]);
  };

  render() {
    const { farm } = this.props;

    return (
      <div className="farm">
        <h2>Производство на ферме</h2>
        <button
          disabled={!farm.length}
          onClick={this.handleClickMoveOrder}
        >
          Отправить урожай клиенту
        </button>
        {farm.map(order => (
          <Order
            key={order.id}
            name={order.name}
            price={order.price}
            createdAt={order.createdAt.toTimeString()}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  farm: state.farm.orders,
});
const mapDispatchToProps = {
  moveOrderToCustomer,
};

export default connect(mapStateToProps, mapDispatchToProps)(
  Farm,
);
