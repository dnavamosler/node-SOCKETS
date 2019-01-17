/*================================== /*
              Dependencias
/*================================== */
const express = require('express');
const path = require('path');
const socketIO = require('socket.io')
const http = require('http')

/*================================== /*
      Instancia de express
/*================================== */
const app = express();

// definir servidor http
let server = http.createServer(app)

/*================================== /*
  declarar path para carpeta publica
 *================================== */
const publicPath = path.resolve(__dirname, '../public');

// Puerto de produccion y desarrollo
const port = process.env.PORT || 3000;

/*================================== /*
    Middleware para montar el public
 /*================================== */
app.use(express.static(publicPath));

// Inicializar socket
module.exports.io = socketIO(server)
require('./sockets/socket.js')

/*================================== /*
        Servidor Corriendo
/*================================== */
server.listen(port, (err) => {
    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
