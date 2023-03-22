const express = require('express')
const dotenv = require("dotenv").config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require("./config/db")
const cors = require("cors");
const port = process.env.PORT || 5000

connectDB()

const app = express()
app.use(cors());

app.use(express.json ())

app.use(express.urlencoded({extended:false}))

app.use('/api/data',require('./routes/dataRoutes'))
 
app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))