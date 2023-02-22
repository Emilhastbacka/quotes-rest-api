const quotes = require("./quotes.json")
const express = require('express');
const app = express();


app.use(express.static("public"));

app.get('/api/quotes', (req, res) => {
    const data = quotes


    let randomItem = quotes[Math.floor(Math.random() * quotes.length)];
    res.json(randomItem);

});

app.listen(3000)

