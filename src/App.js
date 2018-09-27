import React, {Component} from 'react';
import styled from 'styled-components';
import Presentation from './components/Presentation';
import withOnboardService from './components/withOnboardService';

const NextSectionLink = styled.a`
  color: #555;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  font-weight: 700;
`;

class App extends Component {
  render() {
    const actionLabel = this.props.authenticated ? 'Next' : 'Sign In';
    const action = this.props.authenticated ? this.props.moveForward : () => {this.props.auth0Client.signIn()};
    return (
      <Presentation
        title="Introduction"
        actionLabel={actionLabel}
        action={action}
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
            As you are already authenticated, move to <NextSectionLink onClick={() => {
          }}>the next section</NextSectionLink> to get started.
          </p>
        }
      </Presentation>
    );
  }
}

export default withOnboardService(App);
