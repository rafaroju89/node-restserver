/*
 * Puerto
 */

process.env.PORT = process.env.PORT || 3000;

//Entorno
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

process.env.NODE_ENV = 'prod'

//Base de datos
let urlDB;
if (process.env.NODE_ENV === 'dev') {
    urlDB = 'mongodb://localhost:27017/cafe';
} else {
    urlDB = 'mongodb+srv://rafael:JhLvL8pBvKPbIVyK@cluster0.wdfvs.mongodb.net/cafe';
}


process.env.URLDB = urlDB;