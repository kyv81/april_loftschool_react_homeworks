import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Modal extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    show: PropTypes.bool.isRequired,
  };

  render() {
    const { show, children } = this.props;

    return (
      (show &&
        ReactDOM.createPortal(
          children,
          document.getElementById('portal')
        )) ||
      null
    );
  }
}

export default Modal;
