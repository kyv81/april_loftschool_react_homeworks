import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { getEntities, getIsShowLoading, getShowError } from 'reducers/shows';
import './ShowPage.css';

class ShowPage extends Component {
  render() {
    const {
      entities: { name, image, summary, _embedded },
      isShowLoading,
      showError,
    } = this.props;

    if (isShowLoading) return <p>Данные загружаются...</p>;
    if (showError) return <p>Ошибка загрузки</p>;

    return (
      <div className="show-page">
        <p>{name}</p>
        {image && <img src={image.medium} alt={name} />}
        <div dangerouslySetInnerHTML={{ __html: summary }} />
        <div className="cast">
          {!_embedded.cast.length && <Redirect to="/" />}
          {_embedded.cast.map(actor => (
            <div className="t-person" key={actor.person.id}>
              <p>{actor.person.name}</p>
              <img src={actor.person.image.medium} alt={actor.person.name} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  entities: getEntities(state),
  isShowLoading: getIsShowLoading(state),
  showError: getShowError(state),
});

export default connect(mapStateToProps)(ShowPage);
