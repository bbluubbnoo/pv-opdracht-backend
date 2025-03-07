const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors(
));


//import data Gwendoline
const games = require("./data/games");



//importedata David
const codeertools = require("./data/codeertools");



//import data Mike




//import data Igor




//import data Fatima




//importe data Elise




//import data Suzanna
const cijfers = require("./data/cijfers")



//Routes Gwendoline
app.get("/games", (req, res) => {
    res.json(games);
});

app.get("/games/:id", (req, res) => {
    const game = games.find(item => item.id == req.params.id);
    if(game)
    {
        res.json(game);
    }
    else
    {
        res.status(404).json({error : "Videogame niet gevonden"});
    }
});




//Routes David
app.get("/codeertools", (req, res) => {
    res.json(codeertools);
});

app.get("/codeertools/:id", (req, res) => {
    const tool = codeertools.find(t => t.id == req.params.id);
    if (tool) {
        res.json(tool);
    } else {
        res.status(404).json({ message: "Tool niet gevonden" });
    }
});




//Routes Mike



















//Routes Igor



















//Routes Fatima



















//Routes Elise



















//Routes Suzanna
app.get("/cijfers", (req, res) => {
    res.json(cijfers);
});

app.get("/cijfers/:id", (req, res) => {
    const cijfer = cijfers.find(c => c.id == req.params.id);
    if(cijfer)
    {
        res.json(cijfer);
    }
    else
    {
        res.status(404).json({error : "Cijfer bestaat niet"});
    }
});




//start Server
app.listen(PORT, () => {
    console.log("Server luistert op poort: " + PORT);
});










