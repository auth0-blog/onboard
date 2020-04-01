import React from 'react';
import Presentation from '../components/Presentation';
import withOnboardService from '../components/withOnboardService';

function Deadline(props) {
  return (
    <Presentation
      title="Deadline"
      action={props.moveForward}
      actionLabel="Next"
      cancel={props.stepBack}
      cancelLabel="Go Back"
    >
      <p>
        The process <strong>duration will vary</strong> depending on the topic and on how busy authors are during it.
      </p>
      <p>
        Although most authors manage to produce <strong>an article within two or three weeks</strong>, Auth0 knows
        that authors have other duties and that they can get stuck with other important matters. Therefore, it
        won't be a problem if an author take a little longer.
      </p>
      <p>Just be careful not to end up with an unfinished article that becomes old news.</p>
    </Presentation>
  );
}

export default withOnboardService(Deadline);
