const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database'); // no se quiere todo el archivo sino la conexión/** Se crea

// Configuraciones
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json()); // método que ayuda a convertir el código para que el servidor pueda entender lo
app.use(cors({origin: 'http://localhost:4200'})); // método para comunicar con el cliente

// Rutas de nuestro servidor
app.use('/api/estudiantes', require('./routes/estudiantes'));

// Iniciando el servidor
app.listen(app.get('port'), () => { // esta es una mejor manera de configurar el puerto
    console.log('server activo en el puerto', app.get('port'));
});