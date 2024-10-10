const dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  target: "web",
  entry: "./script.js",
  output: {
    path: __dirname + "/dist",
    filename: "bundle.js",
  },
  plugins: [
    new dotenv({
      path: "./.env.local",
    }),
  ],
};
