process.env.NODE_ENV = 'dev';

const app = require('./server');

app.listen(3001, () => {
  console.log('Listening on port 3001.');
});
