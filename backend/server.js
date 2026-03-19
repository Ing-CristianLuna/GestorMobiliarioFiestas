//const express = require("express") YA ESTA DECLARADO EN APP.JS

const app = require("./src/app")

app.listen(3000, () => {
    console.log("servidor corriendo en localhost:3000")
})






//npm install cors dotenv para conectar con react