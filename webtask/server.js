const { WebClient } = require('@slack/client');
const bodyParser = require('body-parser');
const express = require('express');
const jwksRsa = require('jwks-rsa');
const jwt = require('express-jwt');

const app = new express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  const issuer = 'https://auth0-blog.auth0.com/';

  return jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `${issuer}.well-known/jwks.json`
    }),
    audience: 'HPzKOMp0LP4k30TJwIDB74T5GWHYuAQq',
    issuer: issuer,
    algorithms: [ 'RS256' ]
  })(req, res, next);
});

app.get('/', (req, res) => {
  res.status(200).send('hi');
});

app.post('/', async (req, res) => {
  const web = new WebClient(process.env.SLACK_TOKEN);
  const botMessage = `<!here>, ${req.user.name} just applied to the Guest Author Program with the following email address: ${req.user.email}.`;
  const slackRes = await web.chat.postMessage({ channel: process.env.SLACK_CHANNEL, text: botMessage });

  res.status(200).send(slackRes.ts);
});

module.exports = app;
