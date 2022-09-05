const express = require('express')
const app = express()
const path = require('path')


app.set('views', path.join(__dirname))
app.set('view engine', 'hbs')

app.get('/me', (req, res) => {
    res.render('me', {message: "hello world"})
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 4.1 - Render a View`));
