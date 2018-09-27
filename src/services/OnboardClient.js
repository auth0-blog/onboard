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
      headers['Authorization'] = `Bearer ${this.auth0Client.getIdToken()}`;
    }

    return axios('https://wt-76ea40cbf67675babe924eecf167b9b8-0.sandbox.auth0-extend.com/webtask', {
      method: 'POST',
      headers,
      body: JSON.stringify({ name, email, userId })
    });
  }
}
