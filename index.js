//aca iniciamos el servidor , donde app es el servidor 
const express = require("express");
const cors = require("cors")
const dotenv = require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const router = require("./routes/routes")
const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

require("./database/database")
app.use("/api", router )


console.log(process.env.MONGO_URI)

app.listen(process.env.PORT,() => 
    console.log("Nuestro servidor está escuchando en el PORT " + process.env.PORT) //esto lo que hace es una llamada al servidor
)

