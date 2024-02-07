const express = require("express");
const core = require('core')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors')

const app = express();


// middleware

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// routes
app.get('/', (req, res) => {
    res.send(<h1>Hello from server</h1>)
})

// port

const PORT = 8080 || process.env.PORT

// listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});