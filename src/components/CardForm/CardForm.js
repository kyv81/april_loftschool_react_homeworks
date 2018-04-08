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
          data-test="card-form"
          name="cardNumber"
          onChange={this.handleChangeForm}
        />
      </div>
    );
  }
}

export default CardForm;
