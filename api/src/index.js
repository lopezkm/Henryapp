import express from "express";
import morgan from "morgan";
import consola from "consola";
import { connectDB } from "./connectionDB";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { config } from "dotenv";
config();

const { APP_PORT } = process.env;

// Iniciar App
const app = express();
// remove header
app.disable("x-powered-by");
// Servidor ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

// middlewares
app.use(cors());
app.use(morgan("dev"));
// Conexion express y apollo
server.applyMiddleware({ app, cors: false });

// connect to db
connectDB().then(() => {
  // Iniciar servidor
  app.listen({ port: APP_PORT }, () => {
    consola.success({
      message: `Apollo-Server on port: ${APP_PORT}`,
      badge: true,
    });
  });
});
