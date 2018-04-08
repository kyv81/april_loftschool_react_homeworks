import React, { Component } from 'react';
import './PersonalForm.css';

class PersonalForm extends Component {
  handleChangeForm = e => {
    const { onChangeForm } = this.props;
    const name = e.target.name;
    const value = e.target.value;

    onChangeForm(name, value);
  };

  render() {
    const inputNames = ['firstName', 'lastName', 'email'];

    return (
      <div
        className="personal-form"
        data-test="personal-form"
      >
        {inputNames.map(name => (
          <input
            key={name}
            name={name}
            placeholder={name.toUpperCase()}
            onChange={this.handleChangeForm}
          />
        ))}
      </div>
    );
  }
}

export default PersonalForm;
