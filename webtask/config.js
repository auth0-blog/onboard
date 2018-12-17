const devConfig = {
  audience: 'iYi0tC5KJJa7nFxAoNT65iUroLuYN54B',
};

const prodConfig = {
  audience: 'HPzKOMp0LP4k30TJwIDB74T5GWHYuAQq',
};

const config = process.env.NODE_ENV === 'dev' ? devConfig : prodConfig;

module.exports = {
  ...config
};
