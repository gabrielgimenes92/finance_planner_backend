const express = require("express");
const serverless = require("serverless-http");

const api = express();
const router = express.Router();

router.get("/hello", (req, res) =>
  res.send("Hello World! CD environment working")
);

api.use("/.netlify/functions/api/", router);

module.exports.handler = serverless(api);
