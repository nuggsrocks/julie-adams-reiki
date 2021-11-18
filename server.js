const express = require('express')
const path = require('path')
const app = express()

const port = process.env.PORT || 8080

const host = process.env.HOST || 'localhost'

app.use(express.static(path.join(__dirname, '/public')))

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(port, host, () => console.log('************'))
