import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Articles from 'views/Articles';
import Facebooks from '../Facebooks';
import DetailsPage from '../DetailsPage';
import { routs } from '../../routs/index';

const Root = () => (
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
);

export default Root;
