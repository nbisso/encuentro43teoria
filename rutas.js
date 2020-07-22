const rutasPersonas = require("./routes/persona")

module.exports = {
    registrarRutas: function (server) {
        rutasPersonas.registrarRutasPersona(server)

        server.get("/index", (request, response) => {
            response.sendfile("./index.html")
        })

        server.get("/test", (request, response) => {
            response.send("123")
        })

        server.get("/json", (request, response) => {
            console.log(request.headers);

            response.json({
                "hola": "mundo"
            })
        })
    }
}