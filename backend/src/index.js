const express = require('express');
const mongoose = require('mongoose');

const config = require('../config');
const routes = require('./routes');

const app = express();

mongoose
  .connect(config.strConnection(), {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => app.emit('connected_db'))
  .catch(e => console.error('ERROR CONNECTING TO DATABASE.'));

app.use(express.json());
app.use(routes);

app.on('connected_db', () => app.listen(3333));
