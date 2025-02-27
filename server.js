const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

// Dummy data
const dummyData = [
  { id: 1, name: 'Product 1', description: 'This is product 1' },
  { id: 2, name: 'Product 2', description: 'This is product 2' },
  { id: 3, name: 'Product 3', description: 'This is product 3' },
  { id: 4, name: 'Product 4', description: 'This is product 4' },
  { id: 5, name: 'Product 5', description: 'This is product 5' },
  { id: 6, name: 'Product 6', description: 'This is product 6' },
  { id: 7, name: 'Product 7', description: 'This is product 7' },
  { id: 8, name: 'Product 8', description: 'This is product 8' },
  { id: 9, name: 'Product 9', description: 'This is product 9' },
  { id: 10, name: 'Product 10', description: 'This is product 10' }
];

// Endpoint to return list of data
app.get('/api/products', (req, res) => {
  res.json(dummyData);
});

// Endpoint to return data by id
app.get('/api/products/:id', (req, res) => {
  const id = req.params.id;
  const product = dummyData.find((product) => product.id === parseInt(id));
  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  } else {
    res.json(product);
  }
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});