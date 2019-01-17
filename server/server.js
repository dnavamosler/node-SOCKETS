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
let io = socketIO(server)

io.on('connection', (client) => {
    console.log(`se conecto al servidor.`)


    // Enviar mensaje al cliente

    client.emit('escucharMensaje',{
        usuario : 'administrador',
        message : 'Bienvenido usuario'

    })

    // reportar una desconexion
    client.on('disconnect' ,() => {
        console.log(`Un usuario se ha desconectado`)
    })

    // Escuchar mensaje del cliente
    client.on('enviarMessage',(message, cb) => {
        if(message.nombre){
            cb({
                resp : `Todo salio bien!`
            })
        }
        else{
            cb({
                resp : `TODO SALIO MAL!!!!`
            })
        }
    })

} )
/*================================== /*
        Servidor Corriendo
/*================================== */
server.listen(port, (err) => {
    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
