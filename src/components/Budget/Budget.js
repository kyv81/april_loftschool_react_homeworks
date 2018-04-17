import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Budget.css';

export const Budget = ({
  profit,
  marketExpanse,
  farmExpanse,
  deliveryExpanse,
}) => {
  return (
    <div className="budget">
      <h2>Бюджет</h2>
      <p>
        Всего получено денег:{' '}
        <span className="t-profit">{profit}</span>
      </p>
      <p>
        Расходы продавцов:{' '}
        <span className="t-sellers">
          {marketExpanse && `-${marketExpanse}`}
        </span>
      </p>
      <p>
        Расходы на ферме:{' '}
        <span className="t-farm">
          {farmExpanse && `-${farmExpanse}`}
        </span>
      </p>
      <p>
        Расходы на доставку:{' '}
        <span className="t-delivery">
          {deliveryExpanse && `-${deliveryExpanse}`}
        </span>
      </p>
      <p>
        Итого:{' '}
        <span className="t-total">
          {profit -
            marketExpanse -
            farmExpanse -
            deliveryExpanse}
        </span>
      </p>
    </div>
  );
};

Budget.propTypes = {
  profit: PropTypes.number.isRequired,
  marketExpanse: PropTypes.number.isRequired,
  farmExpanse: PropTypes.number.isRequired,
  deliveryExpanse: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  profit: state.budget.profit,
  marketExpanse: state.budget.marketExpanse,
  farmExpanse: state.budget.farmExpanse,
  deliveryExpanse: state.budget.deliveryExpanse,
});

export default connect(mapStateToProps)(Budget);
