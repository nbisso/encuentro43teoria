module.exports = {
    registrarRutasPersona: function (server) {
        server.get("/personas", (req, res) => {
            res.json([
                {
                    id: 1,
                    nombre: 'pepe'
                }
            ])
        })
    }
}