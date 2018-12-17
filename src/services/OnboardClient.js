import axios from 'axios';
import deployment from '../config/deployment';

export default class OnboardClient {
  constructor(auth0Client) {
    this.auth0Client = auth0Client;
  }

  apply({ name, email, userId }) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (this.auth0Client.isAuthenticated()) {
      headers['Authorization'] = `Bearer ${this.auth0Client.getIdToken()}`;
    }

    return axios(deployment.backendURL, {
      method: 'POST',
      headers,
      body: JSON.stringify({ name, email, userId })
    });
  }
}
