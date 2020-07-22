let express = require("express");
let rutas = require("./rutas")
let server = express();


rutas.registrarRutas(server);

server.listen(3000, (err) => {
    console.log("Server init on port 3000")
})