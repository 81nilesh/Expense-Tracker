const express = require("express");
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors');
const connectDb = require("./config/connectdb");
const path = require("path")


// config dot env
dotenv.config();

// database called

connectDb()

const app = express();


// middleware

app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// Static files
app.use(express.static(path.join(__dirname, "./client/build")))

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"))
})

// routes
// user routes
app.use("/api/v1/users", require("./routes/userRoute"))

// transection routes
app.use("/api/v1/transections", require("./routes/transectionRoutes"))

// port

const PORT = 8080 || process.env.PORT

// listen server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});