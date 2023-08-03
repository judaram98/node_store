const express = require('express'); //Se llama el modulo express
const app = express(); //Se crea la app con express
const port = 3000; //Se selecciona el puerto en el cual desplegar la app

//Ahora se envia una respuesta por emdio de un callback
app.get('/', (req, res) => {
  res.send('Hola mi server en express');
});
app.get('/nueva-ruta', (req, res) => {
  res.send('Hola soy una nueva ruta o nuevo endpoint');
});
app.get('/productos', (req, res) => {
  res.json({
    name: 'producrto 1',
    price: 1000,
  });
});

//Ponemos nuestra app a escuchar en caso de que exista una conexion
app.listen(port, () => {
  console.log('Mi puerto ' + port);
});
