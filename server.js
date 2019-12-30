//require('./server/config/config.js');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(require('./routes/usuario'));
const port = process.env.PORT || 3000;

let url = process.env.URLDB;
mongoose.connect('mongodb+srv://serjes10:7ssW2ZZEkGnAufCG@cluster0-bjtzm.mongodb.net/cafe', { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
    (err, res) => {
        if (err) throw err;

        console.log('Base de datos ONLINE');

    });

app.listen(port, () => {
    console.log(`Escuchando el puerto ${port }`);
});