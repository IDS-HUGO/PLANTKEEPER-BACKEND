// index.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const errorHandler = require('./middleware/errorHandler');

// Importar rutas
const userRoutes = require('./routes/userRoutes');
const plantRoutes = require('./routes/plantRoutes');
const careRoutes = require('./routes/careRoutes');
const loginRoutes = require('./routes/loginRoutes'); // Agrega esta línea

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Rutas
app.use('/usuarios', userRoutes);
app.use('/plants', plantRoutes);
app.use('/cuidados', careRoutes);
app.use('/login', loginRoutes); // Agrega esta línea

// Middleware de errores
app.use(errorHandler);

// Sincronizar base de datos y arrancar servidor
sequelize.sync().then(() => {
  console.log('Base de datos sincronizada');
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://52.5.85.140:${PORT}`);
  });
});
