require("dotenv").config();
const { DATABASE_URL } = process.env;
const { mongo } = require("mongoose");
const mongoose = require('mongoose');

const connectDB = () => {// Conectar a la base de datos
  const db = mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
  });

  // Error de conexion
  mongoose.connection.on('error', (error, response) => {
    console.log('Failed to connect MongoDB: ', error);
  });

  // Conexion de mongoose
  mongoose.connection.on('connected', (error, response) => {
    console.log('Connected to MongoDB...')
  });

  // Escuchar desconexion mongoose
  mongoose.connection.on('disconnected', () => {
    console.log('MongoDB Disconnected');
  });

  return db;
}

module.exports = { connectDB };