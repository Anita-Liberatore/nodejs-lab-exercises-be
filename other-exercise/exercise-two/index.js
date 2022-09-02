const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()

app.set('views', path.join(__dirname)); // specify the views directory
app.set('view engine', 'hbs'); // register the template engine

app.get("/me", function(req, res) {
    res.render('me')
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Render a View`));

module.exports = app