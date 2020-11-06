const graphql = require("graphql");
const _ = require("lodash");

const { GraphQLObjectType, GraphQLString, GraphQLList } = graphql;

//Material momentáneo
const usuario = [
  { id: "1", nombre: "Felipe" },
  { id: "2", nombre: "Alfredo" },
  { id: "3", nombre: "Miguel" },
  { id: "4", nombre: "Luciano" },
];

const UsuarioType = new GraphQLObjectType({
  name: "usuario",
  fields: () => ({
    id: { type: GraphQLString },
    nombre: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    usuario: {
      type: UsuarioType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //getting the data from the DB
        return _.find(usuario, { id: args.id });
      },
    },
    usuarios: {
      type: new GraphQLList(UsuarioType),
      resolve(parent, args) {
        return usuario;
      },
    },
  },
});

module.exports = new graphql.GraphQLSchema({
  query: RootQuery,
});
