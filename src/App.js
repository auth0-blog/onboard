import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import Breadcrumbs from './components/Breadcrumbs';
import Container from './components/Container';
import ContentArea from './components/ContentArea';
import CraftedByLogo from './components/CraftedByLogo';
import Header from './components/Header';
import Profile from './components/Profile';
import routes from './services/Routes';
import withOnboardService from './components/withOnboardService';

class App extends Component {
  render() {
    return (
      <Container>
        <Header>
          <ContentArea>
            <h1>The Guest Author Program</h1>
            <CraftedByLogo/>
          </ContentArea>
        </Header>
        <Breadcrumbs/>
        <Profile {...this.props} />
        {
          routes.map((route) => (
            <Route
              exact path={route.path}
              component={route.component}
              key={route.path}
            />
          ))
        }
      </Container>
    );
  }
}

export default withOnboardService(App);
