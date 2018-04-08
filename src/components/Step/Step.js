import React, { Component } from 'react';
import './Step.css';

class Step extends Component {
  handleClick = () => {
    const { onClick, isClickable, number } = this.props;

    if (isClickable) {
      onClick(number);
    }
  };

  render() {
    const {
      children,
      number,
      isClickable,
      isSelected,
    } = this.props;
    return (
      <div
        className={`step ${
          isClickable ? 'step-clickable' : ''
        } ${isSelected ? 'step-selected' : ''}`}
      >
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
      </div>
    );
  }
}

export default Step;
