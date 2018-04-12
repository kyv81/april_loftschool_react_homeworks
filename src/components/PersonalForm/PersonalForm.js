import React, { Component } from 'react';
import Title from 'components/Title';
import './PersonalForm.css';

class PersonalForm extends Component {
  handleChangeForm = e => {
    const { onChangeForm } = this.props;
    const {name, value} = e.target;

    onChangeForm(name, value);
  };

  render() {
    const inputNames = ['firstName', 'lastName', 'email'];

    return (
      <div
        className="personal-form"
        data-test="personal-form"
      >
        <Title>Персональная информация</Title>
        {inputNames.map((name, idx) => (
          <input
            key={idx}
            name={name}
            placeholder={name.toUpperCase()}
            onChange={this.handleChangeForm}
            value={this.props[name]}
          />
        ))}
      </div>
    );
  }
}

export default PersonalForm;
