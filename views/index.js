const express = require('express')
const app = express()
const port = 3000

app.set('views', './views')

app.listen(port, () => {
  console.log(`listening at http://localhost:${port}`)
})

app.get('/', (req, res) => {
  res.render('index.ejs',{title})
})
app.get('/about', (req, res) => {
  res.render('about.ejs')
})
