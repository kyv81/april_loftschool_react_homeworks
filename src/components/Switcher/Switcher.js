import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Switcher.css';

class Switcher extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  state = {
    selectedChild: 0,
  };

  handleChangeChild = e => {
    this.setState({ selectedChild: e.target.dataset.id });
  };

  render() {
    const { selectedChild } = this.state;
    const { children } = this.props;
    const childrenArr = React.Children.toArray(children);
    const selectedChildElem = childrenArr[selectedChild];

    return (
      <div className="switcher">
        <nav>
          <ul className="component-list">
            {React.Children.map(children, (child, idx) => (
              <li
                className="component-list__name"
                data-id={idx}
                onClick={this.handleChangeChild}
              >
                {child.type.displayName || child.type.name}
              </li>
            ))}
          </ul>
        </nav>
        <hr />
        <div className="component-wrapper">
          {selectedChildElem}
        </div>
      </div>
    );
  }
}

export default Switcher;
