const {io} = require('../server.js')

io.on('connection', (client) => {
    console.log(`se conecto al servidor.`)


    // Enviar mensaje al cliente cuando se conecta

    client.emit('escucharMensaje',{
        usuario : 'administrador',
        message : 'Bienvenido usuario'

    })


    // reportar una desconexion
    client.on('disconnect' ,() => {
        console.log(`Un usuario se ha desconectado`)
    })

    // Escuchar mensaje del cliente
    client.on('enviarMessage',(data, cb) => {

        // esta funcion de prueba emite mensajes tipo chat grupal
        client.broadcast.emit('enviarMessage',data)


        //realizando pruebas

        // if(data.nombre){
        //     cb({
        //         resp : `Todo salio bien!`
        //     })
        // }
        // else{
        //     cb({
        //         resp : `TODO SALIO MAL!!!!`
        //     })
        // }
    })

} )
