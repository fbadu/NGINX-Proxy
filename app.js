require('dotenv/config')

const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql')

const app = express()
const port = process.env.PORT || 3000

/* Database Configuration */
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

conn.connect((err) => {
  if (err) {
    console.log(`Error: ${err} \n`)
  } else {
    console.log('\n Database connected! \n')
  }
})

app.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`)
})
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/* Endpoint */
app.get('/welco', (req, res) => {
  conn.query("SHOW VARIABLES LIKE 'server_id'", function (err, results) {
    if (err) {
      res.json(err)
    } else {
      result = {
        "Message" : `Welcome To this API ${process.env.NAME}`,
        "Status Code" : 200,
        "result Query" : results
      }
      res.json(result)
    }
  });
})

app.get('/user', (req, res) => {
  conn.query('SELECT * FROM user ', (err, result) => {
    if (err) console.log(err)
    res.json(result)
  })
})

module.exports = app