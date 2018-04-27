import React, { Fragment, Component } from 'react';
import App from 'components/App';
import { Route, Switch } from 'react-router-dom';
import ShowPage from 'components/ShowPage';

class AppRouter extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/" component={App} exact />
          <Route path="/shows/:id" component={ShowPage} />
        </Switch>
      </Fragment>
    );
  }
}

export default AppRouter;
