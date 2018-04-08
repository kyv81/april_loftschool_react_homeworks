import React, { Component } from 'react';
import './CardForm.css';

class CardForm extends Component {
  componentWillUnmount() {}

  handleChangeForm = e => {
    const { onChangeForm } = this.props;
    const name = e.target.name;
    const value = e.target.value;

    onChangeForm(name, value);
  };

  render() {
    return (
      <div className="card-form" data-test="card-form">
        <input
          name="cardNumber"
          placeholder="0000000000000000"
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default CardForm;
