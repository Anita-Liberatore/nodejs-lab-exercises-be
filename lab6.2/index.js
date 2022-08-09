const express = require('express');
const app = express();
const controller = require('./router/router');

//body parser middleware
app.use(express.json());

app.use('/', controller);

app.use((req, res) => {
    res.status(404).json({ message: 'not found' })
})

app.use((err, req, res, _next) => {
    res.status(err.status ?? 500).json({ message: 'internal server error' })
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 6.2`));

module.exports = app