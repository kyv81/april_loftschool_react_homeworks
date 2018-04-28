import React, { Component } from 'react';
import Search from 'components/Search';
import ShowPreview from 'components/ShowPreview';
import Load from 'components/Load';
import Err from 'components/Err';
import './App.css';
import { connect } from 'react-redux';
import { searchRequest } from 'actions/search';
import { showRequest } from 'actions/show';
import { getIsLoading, getError, getShowPreview } from 'reducers/search';
import { getEntities, getIsShowLoading, getShowError } from 'reducers/shows';

class App extends Component {
  state = {
    searchValue: '',
  };

  handleChange = e => {
    this.setState({ searchValue: e.target.value });
  };

  handleClick = () => {
    const { searchRequest } = this.props;
    const { searchValue } = this.state;

    searchRequest(searchValue);
  };

  renderSearch = () => {
    const { searchValue } = this.state;

    return (
      <Search
        onChange={this.handleChange}
        onClick={this.handleClick}
        placeholder="Название сериала"
        value={searchValue}
      />
    );
  };

  renderShowPreview = () => {
    const {
      isLoading,
      error,
      shows,
      match: { url },
      showRequest,
    } = this.props;

    if (isLoading) return Load();
    if (error) return Err();

    return (
      <div className="t-search-result">
        {shows.map(({ id, image, name, summary }) => (
          <ShowPreview
            key={id}
            id={id}
            image={image}
            name={name}
            showRequest={showRequest}
            summary={summary}
            url={url}
          />
        ))}
      </div>
    );
  };

  render() {
    return (
      <div className="app">
        {this.renderSearch()}
        {this.renderShowPreview()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: getIsLoading(state),
  error: getError(state),
  shows: getShowPreview(state),
  entities: getEntities(state),
  isShowLoading: getIsShowLoading(state),
  showError: getShowError(state),
});

const mapDispatchToProps = { searchRequest, showRequest };

export default connect(mapStateToProps, mapDispatchToProps)(App);
