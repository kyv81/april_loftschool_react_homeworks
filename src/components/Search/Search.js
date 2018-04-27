import React, { PureComponent } from 'react';
import './Search.css';

class Search extends PureComponent {
  render() {
    const { onChange, onClick, placeholder, value } = this.props;

    return (
      <div className="search">
        <input onChange={onChange} placeholder={placeholder} value={value} />
        <button onClick={onClick}>Найти</button>
      </div>
    );
  }
}

export default Search;
