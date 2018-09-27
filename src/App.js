import React, {Component} from 'react';
import styled from 'styled-components';
import Breadcrumbs from './components/Breadcrumbs';
import Container from './components/Container';
import ContentArea from './components/ContentArea';
import CraftedByLogo from './components/CraftedByLogo';
import Header from './components/Header';
import Notification from './components/Notification/Notification';
import NotificationManager from './components/Notification/NotificationManager';
import Presentation from './components/Presentation';

const NextSectionLink = styled.a`
  color: #555;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  font-weight: 700;
`;

class App extends Component {
  render() {
    return (
      <Container>
        <Notification />
        <Header>
          <ContentArea>
            <h1>The Guest Author Program</h1>
            <CraftedByLogo/>
          </ContentArea>
        </Header>
        <Breadcrumbs />
        <Presentation
          title="Introduction"
          actionLabel="Next"
          action={() => { NotificationManager.warning('cooooooool') }}
        >
          <p>
            The present website exists to help on the onboard process of the Guest Author Program.
          </p>
          {
            !this.props.authenticated &&
            <p>If you want to apply to this program, just click on the <em>Sign In</em> button to get started.</p>
          }
          {
            this.props.authenticated &&
            <p>
              As you are already authenticated, move to <NextSectionLink onClick={() => {}}>the next section</NextSectionLink> to get started.
            </p>
          }
        </Presentation>
      </Container>
    );
  }
}

export default App;
