//carregando o express
const express = require("express");
//instancio o express e carregando a biblioteca do express dentro dessa const app
const app = express();

app.listen(3000,() => {
    console.log("Servidor rodando!");
})

app.get("/", (req, res) => {
    res.send(games);
})

//Lista de games

let games =[
    {title: "Sea of Thieves", studio: "Rare", price: 30},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 0},
    {title: "COD", studio: "Activision", price: 200},
    {title: "Minecraft", studio: "Mojang", price: 80},
    {title: "Halo", studio: "Microsoft", price: 90},
    {title: "GTA", studio: "Rockstar", price: 38},
    {title: "Forza Horizon", studio: "Playground Games", price: 250},
    {title: "Assetto Corsa", studio: "Kunos Simulazioni", price: 60},
    {title: "ETS2", studio: "SCS Software", price: 62},

]

app.use(express.json());

app.post("/novogame", (req, res) =>{
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

    console.log(title);
    console.log(studio);
    console.log(price);

    let newGame = {title, studio, price};
    //para enviar estes dados para o array agora utilizamos o método push do js
    games.push(newGame);

    res.send("OK")
})

//att um curso
app.put('/novogame/:index', (req, res) =>{
    const { index } = req.params;
    let title = req.body.title;
    let studio = req.body.studio;
    let price = req.body.price;

     games[index] = {title, studio, price};

     return res.json(games);

})

app.delete("/:index", (req, res) =>{
    const { index } = req.params;
    games.splice(index,1);
    return res.json({ message: "O jogo foi deletado"});
})

