import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import store from '../../store/index';
import Facebooks from '../Facebooks';
import DetailsPage from '../DetailsPage';
import { routs } from '../../routs/index';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact
            path="/"
            render={() => <Redirect to={routs.notes} />} />

          <Route exact
            path={routs.notes}
            component={Notes} />
          <Route path={routs.note}
            component={DetailsPage} />

          <Route exact
            path={routs.facebooks}
            component={Facebooks} />

          <Route path={routs.facebook}
            component={DetailsPage} />

          <Route exact
            path={routs.articles}
            component={Articles} />

          <Route path={routs.article}
            component={DetailsPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);

export default Root;
