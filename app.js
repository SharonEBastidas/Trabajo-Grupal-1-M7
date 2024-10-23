const express = require('express');
const dotenv = require('dotenv');
const { conectToBD, sequelize } = require('./config/db');
const usuarioRoute = require('./routes/usuarioRoute');

dotenv.config();

const app = express();
const port = 8000;

// Conectar a la base de datos
conectToBD();

sequelize.sync().then(() => {
    console.log('Modelos sincronizados con la base de datos.');
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'pug');
app.set('views', './views');

app.use("/", usuarioRoute);

//configuracion conexion a db
require('dotenv').config();//hay que instalar esta para lectura del env

app.listen(port, () => {
    console.log(`Servidor iniciado en https://localhost:${port}`);
})