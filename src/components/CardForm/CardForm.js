import React, { Component } from 'react';
import Title from 'components/Title';
import './CardForm.css';

class CardForm extends Component {
  componentWillUnmount() {}

  handleChangeForm = e => {
    const { onChangeForm } = this.props;
    const {name, value} = e.target;

    onChangeForm(name, value);
  };

  render() {
    const { cardNumber } = this.props;

    return (
      <div className="card-form" data-test="card-form">
        <Title>Номер карты</Title>
        <input
          name="cardNumber"
          placeholder="0000000000000000"
          onChange={this.handleChangeForm}
          value={cardNumber}
        />
      </div>
    );
  }
}

export default CardForm;
