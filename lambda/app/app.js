const express = require('express');
const serverless = require('serverless-http');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Lambda handler
module.exports.handler = serverless(app);
