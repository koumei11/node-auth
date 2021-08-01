const express = require('express');
const app = express();
const port = 3000;

app.use('/static', express.static('public'));

app.set('view engine', 'ejs');

const mainRoutes = require('./routes');

app.use(mainRoutes);

app.listen(port, () => {
  console.log('Running on localhost:3000');
});


