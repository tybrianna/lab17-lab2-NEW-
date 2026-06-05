require("dotenv").config()
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

const routeTasks = require('../../lab2/simple-mern-vite/src/routes/tasks');

app.use(express.static(path.join(__dirname, 'client-vite/dist')));
app.use(bodyParser.json());

app.use('/api/tasks', routeTasks, (req, res) => res.sendStatus(401));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/client-vite/dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log(`listening on ${port}`);
