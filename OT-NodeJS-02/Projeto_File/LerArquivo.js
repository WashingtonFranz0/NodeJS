var fs = require('fs');

fs.appendFile('novo.txt', 'Olá Node.JS! UNISENAI 2023', function (err) {
    if (err) throw err;
    console.log('Arquivo Salvo!');
});