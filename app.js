// app.js
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log('** inside request **');
  res.json({
    status: 'success',
    data: {
      id: 12345,
      name: 'John Doe',
      email: 'john.doe@example.com',
      age: 30,
      address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA',
      },
      orders: [
        {
          orderId: 'ABC123',
          total: 49.99,
          status: 'completed',
        },
        {
          orderId: 'DEF456',
          total: 79.99,
          status: 'pending',
        },
      ],
    },
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
