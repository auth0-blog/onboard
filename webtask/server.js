const { WebClient } = require('@slack/client');
const bodyParser = require('body-parser');
const express = require('express');
const jwksRsa = require('jwks-rsa');
const jwt = require('express-jwt');
const mandrill = require('mandrill-api/mandrill');
const mandrillClient = new mandrill.Mandrill(process.env.MANDRILL_TOKEN);

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
  const {name, email} = req.user;

  const message = {
    'html': `
      <h1>Guest Author Program Agreement</h1>
      <p>
        Hello, ${name}. Welcome to the Guest Author Program. This is an email to remind you about three things:
      </p>
      <ol>
        <li>your rights as an author;</li>
        <li>the copyright of the content that you produce;</li>
        <li>and about how important it is to avoid plagiarism.</li>
      </ol>
      <h2>Your Rights</h2>
      <p>
        First and foremost, Auth0 wants to make clear to you that your moral rights as an author will be respected.
        That is, you can rest assured that you will always have: the right of paternity; the right of integrity;
        and the right to object to false attribution.
      </p>
      <h2>Copyright</h2>
      <p>
        Regarding the copyright of the work, as Auth0 pays guest authors to research, develop, and write about
        different topics, authors are expected to give to Auth0 the following rights:
      </p>
      <ul>
        <li>the right to issue copies of the work to the public;</li>
        <li>the right to communicate the work to the public;</li>
        <li>the right to make an adaptation of the work;</li>
        <li>and the right to rent or lend the work to the public.</li>      
      </ul>
      <p>
        In other words, once Auth0 pays for an article, <strong>the author cannot publish it</strong> elsewhere
        without explicit consent from Auth0.
      </p>
      <h2>Plagiarism</h2>
      <p>
        Plagiarism is an extremely important subject. Authors must be aware that
        <strong>committing plagiarism is prohibited</strong>.
        To protect itself, Auth0 uses modern plagiarism checkers like Quetext and Grammarly to check articles.      
      </p>
      <p>
        Authors that copy excerpt from existing resources without adding credits will no longer be
        able to participate in the program.      
      </p>
      <h2>Conclusion</h2>
      <p>
        Thanks for joining the Auth0 Guest Author Program and, please, do keep in mind the rules described here
        as they are of utmost importance.
      </p>
      <p>Having said that, Auth0 hopes that you have fun and that you learn a lot while writing. Enjoy!</p>
    `,
    'text': `
    # Guest Author Program Agreement
    
    Hello, ${name}. Welcome to the Guest Author Program. This is an email to remind you about three things:
    
    - your rights as an author;
    - the copyright of the content that you produce;
    - and about how important it is to avoid plagiarism.

    ## Your Rights

    First and foremost, Auth0 wants to make clear to you that your moral rights as an author will be respected. That is, you can rest assured that you will always have: the right of paternity; the right of integrity; and the right to object to false attribution.
    
    ## Copyright
    
    Regarding the copyright of the work, as Auth0 pays guest authors to research, develop, and write about different topics, authors are expected to give to Auth0 the following rights:

    - the right to issue copies of the work to the public;
    - the right to communicate the work to the public;
    - the right to make an adaptation of the work;
    - and the right to rent or lend the work to the public.
    
    In other words, once Auth0 pays for an article, the author cannot publish it elsewhere without explicit consent from Auth0.

    ## Plagiarism

    Plagiarism is an extremely important subject. Authors must be aware that committing plagiarism is prohibited. To protect itself, Auth0 uses modern plagiarism checkers like Quetext and Grammarly to check articles.

    Authors that copy excerpt from existing resources without adding credits will no longer be able to participate in the program.

    ## Conclusion
    
    Thanks for joining the Auth0 Guest Author Program and, please, do keep in mind the rules described here as they are of utmost importance.

    Having said that, Auth0 hopes that you have fun and that you learn a lot while writing. Enjoy!
    `,
    'subject': 'Guest Author Program Agreement',
    'from_email': 'noreply@auth0.com',
    'from_name': 'noreply@auth0.com',
    'to': [
      {
        'email': email,
        'name': name,
        'type': 'to'
      }, {
        'email': 'content@auth0.com',
        'name': 'content@auth0.com',
        'type': 'cc'
      }
    ],
    'headers': {
      'Reply-To': 'content@auth0.com'
    },
    'track_opens': true,
    'tags': [
      'guest-authors'
    ],
  };

  mandrillClient.messages.send({ 'message': message }, async () => {
    const web = new WebClient(process.env.SLACK_TOKEN);
    const botMessage = `<!here>, ${name} just applied to the Guest Author Program with the following email address: ${email}.`;

    try {
      await web.chat.postMessage({ channel: process.env.SLACK_CHANNEL, text: botMessage });
    } catch (err) {
      console.error('A Slack error occurred.', err);
    }

    res.status(200).send();
  }, (e) => {
    console.error(`A mandrill error occurred: ${e.name} - ${e.message}`);
  });
});

module.exports = app;
