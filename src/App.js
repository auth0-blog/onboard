import React, {Component} from 'react';
import Header from './components/Header';
import Container from './components/Container';
import ContentArea from './components/ContentArea';
import CraftedByLogo from './components/CraftedByLogo';

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
      </Container>
    );
  }
}

export default App;
