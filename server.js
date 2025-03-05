const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const codeertools = [
    { id: 1, name: "Visual Studio Code", description: "Gratis editor van Microsoft.", price: "Gratis" },
    { id: 2, name: "IntelliJ IDEA", description: "Krachtige Java IDE.", price: "€149 per jaar" },
    { id: 3, name: "Sublime Text", description: "Minimalistische code editor.", price: "€80 eenmalig" }
];

app.get("/api/codeertools", (req, res) => res.json(codeertools));

app.get("/api/codeertools/:id", (req, res) => {
    const tool = codeertools.find(t => t.id == req.params.id);
    if (tool) {
        res.json(tool);
    } else {
        res.status(404).json({ message: "Tool niet gevonden" });
    }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`API draait op http://localhost:${PORT}`));
