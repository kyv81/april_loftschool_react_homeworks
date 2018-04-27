import React, { Fragment, Component } from 'react';
import './ShowPreview.css';
import { Link } from 'react-router-dom';

class ShowPreview extends Component {
  handleClick = () => {
    const { id, showRequest } = this.props;

    showRequest(id);
  };

  render() {
    const {
      id,
      image,
      // match: { url },
      url,
      name,
      summary,
    } = this.props;

    return (
      <Fragment>
        <div className="t-preview">
          <Link
            to={`${url}shows/${id}`}
            onClick={this.handleClick}
            className="t-link"
          >
            <h3>{name}</h3>
          </Link>
          {(image && <img src={image.medium} alt={name} />) || null}
          <div dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
      </Fragment>
    );
  }
}

export default ShowPreview;
