import Express from 'Express';

const app = Express();

var carros = [
    {nome: "fiesta", price: 50.259, marca: "ford"},
    {nome: "omega", price: 18.414, marca: "gm"},
    {nome: "golf", price: 152.424, marca: "volkswagen"},
    {nome: "audi", price: 244.009, marca: "audi"},
    {nome: "s10", price: 221.022, marca: "gm"},
    {nome: "focus", price: 87.004, marca: "ford"},
    {nome: "polo", price: 64.845, marca: "volkswagen"},
];

app.use(Express.urlencoded({ extended: true }));    

app.get('/', (req, res) =>
res.send("<h3>Rotas no Express</h3><p>Rota '/'")
);

app.get('/sobre', (req, res) =>
    res.send("<h3>Rotas no Express</h3><p>Vamos aprender a utulizar Rotas com Express")
);

app.get('/users/:name', (req, res) => //recebe o parâmetro nome
    res.send('Usuário:' + req.params.name) //exibe o parametro name
); 

app.post('/cars/', (req, res) => {
    let name = req.body.name;
    let price = req.body.price;
    let marca = req.body.marca;

    console.log(name);
    console.log(price);
    console.log(marca);

    carros[(carros.length)] = name;
    carros[(carros.length)] = price;
    carros[(carros.length)] = marca;

    let newCar = {name, price, marca};
    games.push(newCar);


    return res.json([carros[(carros.length - 1)]]);
});

app.get('/cars/:id', (req, res) => {
    let id = req.params.id;
    return res.json([carros[id]])
}); 

app.put('/cars/update/:id', (req, res) => {
    let name = req.body.name;
    let price = req.body.price;
    let marca = req.body.marca;
    carros[req.params.id] = name;
    return res.json(carros[req.params.id], price, marca);
});

app.delete('/cars/delete/:id', (req, res) => {
    let id = req.params.id;
    carros[id] = null; //deletar item
    return res.json(carros[id]);
});

app.listen(3000, () =>
console.log('Servidor iniciado na porta 3000')
);





