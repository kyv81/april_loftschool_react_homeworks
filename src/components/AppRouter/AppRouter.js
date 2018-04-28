import React, { Component } from 'react';
import App from 'components/App';
import { Route, Switch } from 'react-router-dom';
import ShowPage from 'components/ShowPage';

class AppRouter extends Component {
  render() {
    return (
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/shows/:id" component={ShowPage} />
      </Switch>
    );
  }
}

export default AppRouter;
