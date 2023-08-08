const express = require('express'); //Se llama el modulo express
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const app = express(); //Se crea la app con express
const port = 3000; //Se selecciona el puerto en el cual desplegar la app

app.use(express.json());

//Ahora se envia una respuesta por emdio de un callback
// app.get('/', (req, res) => {
//   res.send('Hola mi server en express');
// });
// app.get('/nueva-ruta', (req, res) => {
//   res.send('Hola soy una nueva ruta o nuevo endpoint');
// });

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

//Ponemos nuestra app a escuchar en caso de que exista una conexion
app.listen(port, () => {
  console.log('Mi puerto ' + port);
});
