const devConfig = {
  domain: 'http://localhost:3000',
  prefix: ''
};

const prodConfig = {
  domain: 'https://auth0-blog.github.io',
  prefix: '/onboard'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default {
  ...config
};
