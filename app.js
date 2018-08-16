const express = require('express');
const app = express();
app.use(express.json());
const user = require("./user");
const notifications = require("./notifications");
app.post('/bbc/api/v1/users', (req, res) => user.register(req,res));
app.get('/bbc/api/v1/users', (req, res) => user.search(req,res));
app.post('/bbc/api/v1/notifications/:username', (req, res) => (user.notify(req,res,notifications.send)));
app.listen(3000, () => console.log('BBC Notification Service listening on port 3000!'))
module.exports =app;