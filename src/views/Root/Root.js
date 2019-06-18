import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import Notes from 'views/Notes';
import Facebook from 'views/Facebook';
import Articles from 'views/Articles';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact
          path="/"
          component={Notes} />
        <Facebook exact
          path="/facebook"
          component={Facebook} />
        <Articles exact
          path="/articles"
          component={Articles} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
