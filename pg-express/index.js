const express = require('express');

const app = express(); 

app.use(express.json());


app.get('/', (req, res) => {

    res.send('servidor con express siiiiiiiiii!!!');

});


app.get('/about', (req, res) => {

    res.send('sobre');

});


app.get('/contact', (req, res) => {

    res.send('contacto');

});


app.listen(3000, () => {

    console.log('port:3000');

});






// const http = require('http');


// http.createServer(function (req, res){

//     // res.writeHead(200)


// res.write('<h1>servidor con node</h1>')




// res.end

// }).listen(3000)