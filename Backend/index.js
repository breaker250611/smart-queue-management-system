const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())

const PORT = process.env.PORT

app.listen( PORT , () => {
  console.log(`server is running on port : ${PORT}`)
})