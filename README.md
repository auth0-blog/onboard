# Onboarding Tool

This is the source code of [the onboarding tool that supports the Auth0 Guest Author Program](https://auth0-blog.github.io/onboard/).

## Running

To run the frontend application, you can issue the following commands:

```bash
npm install

npm start
```

To run the backend API, you can issue the following commands:

```bash
cd webtask

npm install

export MANDRILL_TOKEN=...
export SLACK_CHANNEL=...
export SLACK_TOKEN=...

node dev-server
```

> **Note:** You will need to add values to SLACK_CHANNEL, SLACK_TOKEN, and MANDRILL_TOKEN to be able to run the application. To get the first one, you will need to be able to access https://mandrillapp.com/settings (which actually requires an account at https://admin.mailchimp.com). To get the other two (which are related to Slack), you will need access to a (or create one) Slack app: https://api.slack.com/apps/AAX1SV077.

