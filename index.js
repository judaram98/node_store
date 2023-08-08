const express = require('express'); //Se llama el modulo express
const cors = require('cors');
const routerApi = require('./routes');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('./middlewares/error.handler');
const app = express(); //Se crea la app con express
const port = 3000; //Se selecciona el puerto en el cual desplegar la app

app.use(express.json());

const whitelist = ['http://localhost:8080', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('no Permitido'));
    }
  },
};
app.use(cors(options));

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
