import React, { Component } from 'react';
import PersonalForm from 'components/PersonalForm';
import CardForm from 'components/CardForm';
import Step from 'components/Step';
import Title from 'components/Title';
import './App.css';

class App extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    cardNumber: '',
  };

  handleTabClick = step => {
    this.setState({ step });
  };

  handleChangeForm = (arg1, arg2) => {
    this.setState({ [arg1]: arg2 });
  };

  handleClickNextForm = e => {
    this.setState(({ step }) => ({ step: step + 1 }));
  };

  isFormCommitable = () => {
    const {
      step,
      firstName,
      lastName,
      email,
      cardNumber,
    } = this.state;

    if (step === 1) {
      return (
        firstName !== '' &&
        lastName !== '' &&
        (email !== '') & email.includes('@')
      );
    } else if (step === 2) {
      return cardNumber.length === 16;
    } else {
      return false;
    }
  };

  renderForm = () => {
    const {
      step,
      firstName,
      lastName,
      email,
      cardNumber,
    } = this.state;

    if (step === 1) {
      return (
        <PersonalForm
          firstName={firstName}
          lastName={lastName}
          email={email}
          onChangeForm={this.handleChangeForm}
        />
      );
    }

    if (step === 2) {
      return (
        <CardForm
          cardNumber={cardNumber}
          onChangeForm={this.handleChangeForm}
          onChangeTimeOver={this.handleChangeTimeOver}
        />
      );
    }

    if (step === 3) {
      return (
        <p data-test="congratulations">Поздравляем!</p>
      );
    }
  };

  render() {
    const { step } = this.state;
    const stepArr = [
      { number: 1, text: 'Personal information' },
      { number: 2, text: 'Card information' },
      { number: 3, text: 'Finish' },
    ];

    return (
      <div className="container">
        <div className="tab-panel">
          <div className="form-content">
            <div className="form-content-step">
              {stepArr.map(item => (
                <Step
                  isSelected={
                    item.number === step ? true : false
                  }
                  key={item.text}
                  number={item.number}
                >
                  {item.text}
                </Step>
              ))}
            </div>
            <Title />
            {this.renderForm()}
            <div className="button-panel">
              <button
                className="button-next"
                disabled={!this.isFormCommitable()}
                onClick={this.handleClickNextForm}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
