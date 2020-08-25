require('./config/config');
const express = require('express')
    // Using Node.js `require()`
const mongoose = require('mongoose');
const path = require('path');

var bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//Configuracion global de rutas
app.use(require('./routes/index'));

//habilitar la carpeta public
app.use(express.static(path.resolve(__dirname + '/../public')));

mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(process.env.URLDB, { useUnifiedTopology: true, useNewUrlParser: true, }, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');

});

app.listen(process.env.PORT, () => {
    console.log("Escuchando puerto : ", process.env.PORT);
});