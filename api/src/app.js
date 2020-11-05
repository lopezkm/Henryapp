const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const graphqlHTTP = require("express-graphql");

const server = express();

server.name = "HENRYAPP";

server.use(morgan("tiny"));
server.use(cors());

module.exports = server;
