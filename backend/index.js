const express = require("express")
const app = express()
const dotenv = require("dotenv")
const connect = require("./01_Connection/connection")
const routerMan = require("./04_Router/router")
dotenv.config("./.env")
const cors = require("cors")

app.use(cors())
app.use(express.json())
connect()
app.use("/", routerMan)

app.listen(process.env.PORT,()=>{
    console.log("Server is running");
})