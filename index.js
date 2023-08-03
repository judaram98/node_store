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
app.get('/products', (req, res) => {
  res.json([
    {
      name: 'producrto 1',
      price: 1000,
    },
    {
      name: 'producrto 2',
      price: 2000,
    },
  ]);
});
app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'producrto 2',
    price: 2000,
  });
});
app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

//Ponemos nuestra app a escuchar en caso de que exista una conexion
app.listen(port, () => {
  console.log('Mi puerto ' + port);
});
