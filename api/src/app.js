const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const routes = require('./routes');
const server = express();

server.name = "HENRYAPP";

// middlewares
server.use(morgan('dev'));
server.use(express.json());
// TODO: configurar cors
server.use(cors());

// Config rutas REST
server.use('/api/v1', routes);

// Ruta GraphQl
server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);


module.exports = server;
