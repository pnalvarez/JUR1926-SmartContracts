const express = require('express')
const app = express()

// Configuring the template engine
app.set('view engine', 'ejs')

// Configuring static files
app.use(express.static('public'))

// Original browser response
app.get('/', function (req, res) {
  // res.send('Hello World!')
  res.render('index');
})

// Configuring the listening port
app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})