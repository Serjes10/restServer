//PUERTO

process.env.PORT = process.env.PORT || 3000;

//Entorno

process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//Base de datos
var urlDB;

//if (process.env.NODE_ENV === 'dev') {
//urlDB = 'mongodb://localhost:27017/cafe';
//} else {
urlDB = 'mongodb+srv://serjes10:<7ssW2ZZEkGnAufCG>@cluster0-bjtzm.mongodb.net/cafe'
    //}

process.env.URLDB = urlDB;