const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const products = require('./products'); // Import products from the new module

app.get('/api/products', (req, res) => {
    res.json({ products, status: true }); // Use res.json() for proper JSON response
});

if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`App is running on port ${PORT}`); // Use backticks for string interpolation
    });
}

module.exports = app; // Export the app for testing