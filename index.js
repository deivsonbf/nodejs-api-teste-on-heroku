const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello, Deivson'))

app.listen(process.env.PORT, () => console.log(`Example app listening on port port!`))