const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const server = express();

server.name = "HENRYAPP";

server.use(morgan("tiny"));
server.use(cors());
server.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
module.exports = server;
