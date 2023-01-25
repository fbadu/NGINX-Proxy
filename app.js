require('dotenv/config')

const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* Endpoint */
app.get('/welcome', (req, res) => {
  result = {
    "Message" : `Welcome To this API ${process.env.NAME}`,
    "Status Code" : 200,
  }
  res.json(result)
})

module.exports = app