import Auth0Web from 'auth0-web';
import validator from 'email-validator';
import {withRouter} from 'react-router';
import React from 'react';
import NotificationManager from '../components/Notification/NotificationManager';
import config from '../config/auth0';
import OnboardClient from '../services/OnboardClient';
import routes from '../services/Routes';
import deployment from '../config/deployment';

const auth0Client = new Auth0Web({
  audience: config.audience,
  domain: config.domain,
  clientID: config.clientID,
  redirectUri: deployment.domain + deployment.prefix,
  responseType: 'token id_token',
  scope: 'openid email profile',
});

// not nice
let ackCopyright = false;
let ackPlagiarism = false;

export default (WrappedComponent) => {
  return withRouter(class extends React.Component {
    constructor(props) {
      super(props);

      const authenticated = auth0Client.isAuthenticated();
      const profile = authenticated ? auth0Client.getProfile() : null;
      const email = profile && profile.email ? profile.email : '';

      this.state = {
        authenticated,
        profile,
        email,
        ackCopyright,
        ackPlagiarism,
      };

      auth0Client.subscribe((authenticated) => {
        const profile = authenticated ? auth0Client.getProfile() : null;
        const email = profile && profile.email ? profile.email : '';

        this.setState({
          authenticated,
          profile,
          email,
        });
      });

      this.onboardClient = new OnboardClient(auth0Client);

      this.moveForward = this.moveForward.bind(this);
      this.stepBack = this.stepBack.bind(this);
      this.apply = this.apply.bind(this);
      this.toggleCopyright = this.toggleCopyright.bind(this);
      this.togglePlagiarism = this.togglePlagiarism.bind(this);
      this.updateEmail = this.updateEmail.bind(this);
    }

    async componentDidMount() {
      auth0Client.subscribe(async (auth) => {
        if (!auth) {
          await auth0Client.checkSession();
        }
      });

      if (this.state.authenticated) return;

      await auth0Client.checkSession();
    }

    stepBack() {
      const {pathname} = this.props.location;
      const currentPosition = routes.map((route) => (route.path)).indexOf(pathname);
      if (currentPosition < 1) return;

      this.props.history.push(`${routes[currentPosition - 1].path}`);
    }

    moveForward() {
      const {pathname} = this.props.location;
      const currentPosition = routes.map((route) => (route.path)).indexOf(pathname);
      if (currentPosition === routes - 1) return;

      this.props.history.push(`${routes[currentPosition + 1].path}`);
    }

    apply() {
      if (!this.state.authenticated) return NotificationManager.danger(`Please, log in to apply to the Guest Author program.`);

      const email = this.state.email;
      if (!email || !validator.validate(email)) return NotificationManager.danger(`Please, enter a valid email address.`, 'Invalid Email');

      const userId = auth0Client.getProfile().sub;
      const name = this.state.profile.name;
      this.onboardClient.apply({name, email, userId});

      NotificationManager.success(`Thanks for applying!`, 'Done');
    }

    toggleCopyright() {
      ackCopyright = !this.state.ackCopyright;
      this.setState({
        ackCopyright,
      });
    }

    togglePlagiarism() {
      ackPlagiarism = !this.state.ackPlagiarism;
      this.setState({
        ackPlagiarism,
      });
    }

    updateEmail(email) {
      this.setState({
        email,
      });
    }

    signOut() {
      auth0Client.signOut(deployment.domain + deployment.prefix);
    }

    render() {
      const {ackCopyright, ackPlagiarism, authenticated, profile, email} = this.state;
      return (
        <WrappedComponent
          ackCopyright={ackCopyright}
          ackPlagiarism={ackPlagiarism}
          auth0Client={auth0Client}
          authenticated={authenticated}
          moveForward={this.moveForward}
          email={email}
          profile={profile}
          stepBack={this.stepBack}
          apply={this.apply}
          signOut={this.signOut}
          toggleCopyright={this.toggleCopyright}
          togglePlagiarism={this.togglePlagiarism}
          updateEmail={this.updateEmail}
        >
          {this.props.children}
        </WrappedComponent>
      )
    }
  });
};
