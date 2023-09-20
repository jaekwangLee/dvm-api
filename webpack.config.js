/** @format */

const environment = (process.env.NODE_ENV || "development").trim();

let config;
if (environment === "development") {
  config = require("./webpack.dev.js");
} else {
  config = require("./webpack.prod.js");
}

module.exports = config;
