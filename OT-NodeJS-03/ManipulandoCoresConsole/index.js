var clc = require("cli-color");
var error = clc.red.bold;
var warn = clc.yellow;
var notice = clc.blue;
var clc = require("cli-color");

var msg = clc.xterm(202).bgXterm(236);

var msg = clc(msg("Orange text on dark gray background"));

console.log(clc.green("Mensagem verde;"));
console.log(clc.red("Mensagem vermelho;"));
console.log(clc.blue("Mensagem azul;"));
console.log(clc.yellow("Mensagem amarelo;"));
console.log(clc.red("red " + clc.blue("blue") + " red"));
console.log(clc.red("red") + " plain " + clc.blue("blue"));
console.log(clc.red.bgWhite.underline("Underlined red text on white background."));
console.log(clc.red("text in red"));

console.log(error("Error!"));
console.log(warn("Warning"));
console.log(notice("Notice"));

process.stdout.write(
    clc.columns([
        [clc.bold("First Name"), clc.bold("Last Name"), clc.bold("Age")],
        ["Jonh" , "Doe", 34],
        ["Martha", "Smith", 20],
        ["Jan", "Kowalski", 30]
    ])
);






