import React from 'react';
import Presentation from '../components/Presentation';
import styled from 'styled-components';
import withOnboardService from '../components/withOnboardService';

const NextSectionLink = styled.a`
  color: #555;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  font-weight: 700;
`;

function Introduction(props) {
  const actionLabel = props.authenticated ? 'Next' : 'Sign In';
  const action = props.authenticated ? props.moveForward : () => {props.auth0Client.signIn()};
  return (
    <Presentation
      title="Introduction"
      actionLabel={actionLabel}
      action={action}
    >
      <p>
        The present website exists to help with the onboard process of the Guest Author Program.
      </p>
      {
        !props.authenticated &&
        <p>If you want to apply to this program, just click on the <em>Sign In</em> button to get started.</p>
      }
      {
        props.authenticated &&
        <p>
          As you are already authenticated, move to <NextSectionLink onClick={() => {
        }}>the next section</NextSectionLink> to get started.
        </p>
      }
    </Presentation>
  );
}

export default withOnboardService(Introduction);
