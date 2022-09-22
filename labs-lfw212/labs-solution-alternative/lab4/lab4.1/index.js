const express = require('express')
const path = require('path')
const hbs = require('hbs')
const app = express()
  
// View Engine Setup
app.set('views', path.join(__dirname))
app.set('view engine', 'hbs')

/*- Render a view that uses the layout.hbs that was created in this chapter to create a small profile page. The HTML content
is unimportant, just make sure to render a view.*/
app.get('/me', function(req, res){
    res.render('me', {
       message: 'Greetings from geekforgeeks'
    })
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT} - Lab 4.1 - Render a View`));

module.exports = app