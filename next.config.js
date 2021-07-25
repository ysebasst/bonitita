// module.exports = {
//   reactStrictMode: true,
//   env: {
//     baseUrl: process.env.PUBLIC_URL
//       ? process.env.PUBLIC_URL
//       : "http://localhost:3000",
//   },
// };

const withPWA = require("next-pwa");

module.exports = withPWA({
  env: {
    baseUrl: process.env.PUBLIC_URL
      ? process.env.PUBLIC_URL
      : "http://localhost:3000",
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
