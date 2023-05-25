const express= require('express')
const app = express()
const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require("cors")

dotenv.config()
app.use(cors())
const port = process.env.PORT || 8081

app.use(express.json())

mongoose.connect(process.env.MONGO_URI).then( () => console.log("database connected"))

app.use("/api", require("./routes/contactRoutes"))

app.listen(port, () => console.log("lestening on port :", port))
