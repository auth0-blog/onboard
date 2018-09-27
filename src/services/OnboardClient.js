import axios from 'axios';

export default class OnboardClient {
  constructor(auth0Client) {
    this.auth0Client = auth0Client;
  }

  apply({ name, email, userId }) {
    const headers = {
      'Content-Type': 'application/json',
    };

    if (this.auth0Client.isAuthenticated()) {
      headers['Authorization'] = `Bearer ${this.auth0Client.getAccessToken()}`;
    }

    return axios('/api/', {
      method: 'POST',
      headers,
      body: JSON.stringify({ name, email, userId })
    });
  }
}
