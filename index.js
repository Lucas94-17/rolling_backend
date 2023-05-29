//aca iniciamos el servidor , donde app es el servidor 
const express = require("express");
const cors = require("cors")
const app = express()
const dotenv = require("dotenv")

dotenv.config()

app.use(express.json())
app.use(cors())


app.post("/users" ,(req,res) =>{
    res.status(201).send(req.body)
})

app.get("/" ,(req,res) =>{
    res.status(200).send("hola") // Codigo de respuesta y un mensaje
})

app.listen(process.env.PORT,() => 
    console.log("Nuestro servidor está escuchando en el PORT " + process.env.PORT) //esto lo que hace es una llamada al servidor
)

