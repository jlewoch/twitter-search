require('dotenv').config();
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3000;
const app = express();

// apply middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// serve webpage
app.use('/', express.static(path.join(__dirname, 'client/build')));
// routes
app.use('/api', require('./routes'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  res.sendStatus(404);
});

app.listen(PORT, () => console.log(`Server is listening on ${PORT}`));
