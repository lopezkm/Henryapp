import { config } from "dotenv";
config();
const { DATABASE_URL } = process.env;
import mongoose from "mongoose";
import consola from "consola";

const connectDB = () => {
  // Conectar a la base de datos
  const connection = mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  });

  const mongooseConn = mongoose.connection;

  // Borrar datos de las colecciones.
  const cleanCollections = () => {
    mongooseConn.db.listCollections().toArray((error, collections) => {
      collections.forEach((collection) => {
        mongooseConn.db
          .dropCollection(collection.name)
          .then((response) => {
            consola.info({
              message: `Drop data from collection ${collection.name}: ${response}`
            });
          })
          .catch((error) => console.log("Drop data from collections:", error));
      });
    });
  };

  // Error de conexion
  mongooseConn.on("error", (error, response) => {
    consola.error({
      message: `MongoDB failed to connect: ${error}`,
      badge: true,
    });
  });

  // Conexion de mongoose
  mongooseConn.once("open", (error, response) => {
    consola.success({
      message: `MongoDB on port: ${mongooseConn.port}`,
    });

    consola.success({
      message: `Connected to DB: ${mongooseConn.name}`,
    });

    // Borrar datos de las colecciones.
    cleanCollections();
  });

  // Escuchar desconexion mongoose
  mongooseConn.on("disconnected", (error, response) => {
    consola.error({
      message: `MongoDB Disconnected: ${error}`,
      badge: true,
    });
  });

  return connection;
};

export { connectDB };
