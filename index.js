const express = require('express'); //Se llama el modulo express
const faker = require('faker');
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
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let index = 0; index < limit; index++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
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
app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

//Ponemos nuestra app a escuchar en caso de que exista una conexion
app.listen(port, () => {
  console.log('Mi puerto ' + port);
});
