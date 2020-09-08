const express = require("express") /*me traigo express */
const router = require("./routes/main")
const app = express() /*requiero el entre point */

app.listen(3030, () => console.log("servidor levantado en el puerto 3030"))

/*Luego registramos nuestras RUTAS /luego ir a router/main.js que va a menejar las rutas principales
El app es la puerta de entrada para los usuarios que quieran usar la aplicacion van a ingresar por este archivo*/

/*ARCHIVOS DE RUTAS se asignan variables */

const mainRoutes = require("./routes/main")
const productsRoutes = require("./routes/products")
const usersRoutes = require("./routes/users")
    /*Despues que me tengo mis archivos de rutas me traigo */
app.use("/", mainRoutes) /*todas las rutas que arranquen con una barra sola la voy a derivar a [mainRoutes] */
app.use("/products", productsRoutes) /*Lo mismo aca */
app.use("/users", usersRoutes) /*lo mismo aca */