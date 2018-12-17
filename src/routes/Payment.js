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
      <p>The payment made for articles submitted to the Guest Author program are decided according to the following rules:</p>
      <ul>
        <li>Up to 1250 words: 75 USD</li>
        <li>Between 1251 and 2500 words: 150 USD</li>
        <li>More than 2500 words: 225 USD</li>
      </ul>
      <p>
        Plus 75 USD if authors explain, with at least 200 words, how Auth0 can help on the context being studied
        (or on the sample being developed).
      </p>
    </Presentation>
  );
}

export default withOnboardService(Payment);
