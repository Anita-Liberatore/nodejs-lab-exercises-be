const express = require('express');
const app = express();

const userController = require('./routes/user-controller');

app.use('/', userController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Project One`));

module.exports = app