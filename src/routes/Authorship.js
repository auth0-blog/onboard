import React from 'react';
import Presentation from '../components/Presentation';
import withOnboardService from '../components/withOnboardService';

function Authorship(props) {
  return (
    <Presentation
      title="Authorship"
      action={props.moveForward}
      actionLabel="Next"
      cancel={props.stepBack}
      cancelLabel="Go Back"
    >
      <p>
        First and foremost, Auth0 wants to make clear to authors that their <strong>moral rights as authors </strong>
        will never be declined. That is, authors can rest assured that they will always have:
      </p>
      <ul>
        <li>the <strong>right of paternity</strong>;</li>
        <li>the <strong>right of integrity</strong>;</li>
        <li>and the right to <strong>object to false attribution</strong>;</li>
      </ul>
      to protect their work and themselves.
    </Presentation>
  );
}

export default withOnboardService(Authorship);
