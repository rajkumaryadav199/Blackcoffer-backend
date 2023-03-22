const express = require('express')
const dotenv = require("dotenv").config()
const {errorHandler} = require('./backend/middleware/errorMiddleware')
const connectDB = require("./backend/config/db")
const cors = require("cors");
const port = process.env.PORT || 5000

connectDB()

const app = express()
app.use(cors());

app.use(express.json ())

app.use(express.urlencoded({extended:false}))

app.use('/api/data',require('./backend/routes/dataRoutes'))
 
app.use(errorHandler)

app.listen(port, () => console.log(`server started on port ${port}`))