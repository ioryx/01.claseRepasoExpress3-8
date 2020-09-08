//(1)me traigo la base de datos
const fs = require('fs')
const path = require('path')
let productos = fs.readFileSync(path.join(__dirname, '..', 'data', 'productos.json'),
    'utf-8')
productos = JSON.parse(id)

let productsController = {
        detalleProducto: (req, res) => {
            //ver codigo de zapatilla
            let id = req.params.id //el usuario brinda la informacion
                //Buscar zapatilla en el deposito(1)
            let productoElegido = productos.filter(productos => {
                    return id == producto.id
                })
                //Mostrar zapatilla al cliente
            res.send(productoElegido);
            /*let productoElegido;
            producos.forEach(producto =>{
                productoElegido = producto
            }) */
        }
    }
    /*me lo tengo que traer al main.js*/
module.exports = productsController