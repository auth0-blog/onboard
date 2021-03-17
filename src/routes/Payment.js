import React from 'react';
import styled from 'styled-components';
import Presentation from '../components/Presentation';
import withOnboardService from '../components/withOnboardService';

const ArticleCategory = styled.h3`
  font-size: 17px;
  margin-top: 25px;
  margin-bottom: -10px;
`;

function Payment(props) {
  return (
    <Presentation
      title="Payment"
      action={props.moveForward}
      actionLabel="Next"
      cancel={props.stepBack}
      cancelLabel="Go Back"
    >
      <p>We pay $400 for each final article submitted to the Guest Author program.</p>
      <p>
        Plus 50 USD if the blog draft is completed in 3 weeks or less.
      </p>
    </Presentation>
  );
}

export default withOnboardService(Payment);
