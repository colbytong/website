/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import TeamPage from 'containers/TeamPage/Loadable';
import EventsPage from 'containers/EventsPage/Loadable';

import GlobalStyle from '../../global-styles';

import NavigationBar from '../../components/nav/NavigationBar';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: white;
`;

export default function App() {
  return (
    <Main>
      <NavigationBar />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/team" component={TeamPage} />
        <Route exact path="/events" component={EventsPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </Main>
  );
}
