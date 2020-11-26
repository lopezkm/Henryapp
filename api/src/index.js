/* const cookieSession = require('cookie-session') */
const passport = require('passport');
import express from "express";
import morgan from "morgan";
import consola from "consola";
import { connectDB } from "./connectionDB";
import typeDefs from "./graphql/typeDefs";
import resolvers from "./graphql/resolvers";
import cors from "cors";
import { ApolloServer } from "apollo-server-express";
import { config } from "dotenv";
import bodyParser from "body-parser";
import options from "./utils/options";
import Thumbs from "./functions/thumbs";
require('./passport');
config();

const { APP_PORT } = process.env;

// Iniciar App
const app = express();
// remove header
app.disable("x-powered-by");
app.use(bodyParser.json());
// Servidor ApolloServer
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  context: ({ req }) => {
    return { req };
  },
});

// middlewares
app.use(cors());
app.use(morgan("dev"));
//
//archivos estáticos
app.use(express.static("src/uploads", options));
//thumbs
app.use("/thumbs", Thumbs);
// Conexion express y apollo
server.applyMiddleware({ app, cors: false });

/* app.use(cookieSession({
  name: 'henryApp3-session',
  keys: ['key1', 'key2']
})) */

/* app.use( ( request, response, next ) => {
  response.header( 'Access-Control-Allow-Origin', 'http://localhost:3000' );
  next( );
} ); */

app.use(passport.initialize());
/* app.use(passport.session()); */

app.get('/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: 'http://localhost:3000/root/register' }),
    function(req, res) {
      console.log('ENTREEEEEEEEEE')
    // Successful authentication, redirect home.
    res.redirect('http://localhost:3000/');
  });

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

module.exports = app;