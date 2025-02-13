const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const products = [
    { id: 1, name: 'product1' },
    { id: 2, name: 'product2' },
    { id: 2, name: 'product3' },
    { id: 2, name: 'product4' },
    { id: 2, name: 'product5' }
];

app.get('/api/products', (req, res) => {
    res.json({ products, status: true }); // Use res.json() for proper JSON response
});

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`); // Use backticks for string interpolation
});