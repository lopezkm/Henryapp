import express from 'express';
// import morgan from "morgan";
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import { ApolloServer } from 'apollo-server-express';

// Iniciar App
const app = express();

// Servido de ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true
});


// middlewares
server.applyMiddleware({ app, cors: false });

export default app;