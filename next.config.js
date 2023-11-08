const path = require("path");

module.exports = {
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve(__dirname);
    return config;
  },
  env: {
    REACT_APP_BASE_BACKEND:
      process.env.REACT_APP_BASE_BACKEND || "https://goost.io:3000/",
  },
  reactStrictMode: true,
};
