const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Zorgt ervoor dat de frontend toegang heeft tot de API

// Dummy productdata
const products = [
    { id: 1, name: "Laptop", price: "€1200" },
    { id: 2, name: "Smartphone", price: "€800" },
    { id: 3, name: "Headphones", price: "€150" }
];

// Route om alle producten op te halen
app.get("/api/products", (req, res) => {
    res.json(products);
});

// Route om een specifiek product op te halen via ID
app.get("/api/products/:id", (req, res) => {
    const product = products.find(p => p.id == req.params.id);
    if (product) {
        res.json(product);
    } else {
        res.status(404).json({ message: "Product niet gevonden" });
    }
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server draait op http://localhost:${PORT}`));
