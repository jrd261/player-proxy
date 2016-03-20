'use strict';

const express = require('express');
const proxy = require('express-http-proxy');
const app = express();


app.use(proxy('https://player-develop.exp.scala.com', {
  forwardPath: (req, res) => require('url').parse(req.url).path
}));


app.listen(9001);


