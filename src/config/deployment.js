const devConfig = {
  domain: 'http://localhost:3000',
  prefix: '',
  backendURL: '/',
};

const prodConfig = {
  domain: 'https://auth0-blog.github.io',
  prefix: '/onboard',
  backendURL: 'https://wt-76ea40cbf67675babe924eecf167b9b8-0.sandbox.auth0-extend.com/webtask'
};

const config = process.env.NODE_ENV === 'production' ? prodConfig : devConfig;

export default {
  ...config
};
