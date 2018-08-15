const express = require('express');
const app = express();
app.use(express.json());
const user = require("./user");
app.all('/', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
 });
app.post('/bbc/api/v1/users', (req, res) => user.register(req,res));
app.get('/bbc/api/v1/users', (req, res) => user.search(req,res));
app.listen(3000, () => console.log('BBC Notification Service listening on port 3000!'))
module.exports =app;