const express = require('express')
const app = express()
//
const port = process.env.PORT || 3000

// app.set('views', './views')
//app.set('view engine','ejs')

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.render('index.ejs', { title: 'home' })
})
app.get('/contact', (req, res) => {
  res.render('contact.ejs')
})
