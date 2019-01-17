/*================================== /*
              Dependencias
/*================================== */
const express = require('express');
const path = require('path');

/*================================== /*
      Instancia de express
/*================================== */
const app = express();

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

/*================================== /*
        Servidor Corriendo
/*================================== */
app.listen(port, (err) => {
sda
    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});
