require("dotenv").config();
const { DATABASE_URL } = process.env;
const mongoose = require('mongoose');

const connectDB = () => {// Conectar a la base de datos
  const connection = mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  const mongooseConn = mongoose.connection;

  // Borrar datos de las colecciones.
  const cleanCollections = () => {
    mongooseConn.db.listCollections().toArray((error, collections) => {
      collections.forEach(collection => {
        mongooseConn.db.dropCollection(collection.name)
          .then(response => console.log('Drop data from collections:', response))
          .catch(error => console.log('Drop data from collections:', error))
      })
    });
  }

  // Error de conexion
  mongooseConn.on('error', (error, response) => {
    console.log('Failed to connect MongoDB: ', error);
  });

  // Conexion de mongoose
  mongooseConn.once('open', (error, response) => {
    console.log('MongoDB on port:', mongooseConn.port, '\nConnected to database:', mongooseConn.name)

    // Borrar datos de las colecciones.
    cleanCollections();
  });

  // Escuchar desconexion mongoose
  mongooseConn.on('disconnected', (error, response) => {
    console.log('MongoDB Disconnected: ', error);
  });

  return connection;
}

module.exports = { connectDB };