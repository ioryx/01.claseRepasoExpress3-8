let mainController = {
    index: (req, res) => {
        res.send("Bienvenido a nuestra pagina")
    }
}
module.exports = mainController
    /*me lo tengo que traer al main.js */
    /*req (parametro)que tiene mnton de informacion sobre lo que el usuario nos envie /toda la informacion viaja por req */
    /*res (parametro)es la respuesta a los requerimientos */