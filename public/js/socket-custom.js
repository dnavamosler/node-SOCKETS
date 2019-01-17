// declaracion de socket
let socket = io()

// Revisamos si se realizo una conexion
  socket.on('connect', () => {
    console.log(' conectado al servidor ')

    socket.on('disconnect', () => {
        console.log(`desconectado del servidor`)
    })

    // Escuchar al servidor cuando se conecta
    socket.on('escucharMessage',(message) => {
        console.log(message)
    })



    //  emitir un mensaje al servidor
    socket.emit('enviarMessage',{
        nombre : 'usuario',
        mensaje: 'acabo de conectarme al servidor'
    },(res) => {
        console.log(res.resp)
    })

    // escuchar un mensaje del servidor enviado por otros usuarios
    socket.on('enviarMessage', (data) => {
        console.log('servidor:', data)
    })

  })
