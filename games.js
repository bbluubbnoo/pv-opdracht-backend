const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(cors());

const games = [
    {
        id: 1,
        name: "Ratchet & Clank: Rift Apart",
        description: "Een episch avontuur door dimensies met verbluffende graphics.",
        price: 69.99
    },
    {
        id: 2,
        name: "Demon's Souls",
        description: "Een uitdagende remake van de klassieke actie-RPG met vernieuwde visuals.",
        price: 59.99
    },
    {
        id: 3,
        name: "Returnal",
        description: "Een sci-fi shooter met roguelike elementen en intense actie.",
        price: 49.99
    },
    {
        id: 4,
        name: "Spider-Man: Miles Morales",
        description: "Beleef het avontuur van Miles Morales in een prachtig vormgegeven New York.",
        price: 39.99
    },
    {
        id: 5,
        name: "Gran Turismo 7",
        description: "De ultieme racesimulatie met realistische graphics en gameplay.",
        price: 69.99
    },
    {
        id: 6,
        name: "Horizon Forbidden West",
        description: "Verken een post-apocalyptische wereld vol mechanische wezens en mysteries.",
        price: 59.99
    },
    {
        id: 7,
        name: "Final Fantasy VII Remake Intergrade",
        description: "Een verbeterde versie van de remake van een klassieker, nu exclusief voor PS5.",
        price: 69.99
    },
    {
        id: 8,
        name: "Resident Evil Village",
        description: "Een horror-actie avontuur vol spanning en onverwachte wendingen.",
        price: 49.99
    },
    {
        id: 9,
        name: "Call of Duty: Modern Warfare II",
        description: "Intense multiplayer-actie en meeslepende campagne op de moderne slagvelden.",
        price: 59.99
    },
    {
        id: 10,
        name: "God of War Ragnarök",
        description: "De epische voortzetting van Kratos' verhaal, vol mythologie en spectaculaire gevechten.",
        price: 69.99
    }
];



app.get("/api/games", (req, res) => {
    res.json(games);
});

app.get("/api/games/:id", (req, res) => {
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

app.listen(PORT, () => {
    console.log("Server luistert op poort: " + PORT);
});