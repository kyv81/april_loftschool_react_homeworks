import React, { Component } from 'react';
import classNames from 'classnames';
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
    const stepClassName = classNames({
      'step': true,
      'step-clickable': isClickable,
      'step-selected': isSelected
    });

    return (
      <div
        className={stepClassName}
        onClick={this.handleClick}
      >
        <div className="step__number">{number}</div>
        <div className="step__title">{children}</div>
      </div>
    );
  }
}

export default Step;
