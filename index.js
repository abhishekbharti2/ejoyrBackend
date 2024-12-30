const express = require('express')
// require('.env');
const app = express()
const port = 3000 //process.env.PORT

app.get('/', (req, res) => {
    res.send('<h2>Hello Welcome</h2>')
})
app.get('/xxx', (req, res) => {
  res.send('Naughty America')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})