import { GraphQLServer } from "graphql-yoga";
// import { gql } from "apollo-server-express";
import db from './db'
import {Query,Comment,Mutation,Post,User} from './resolvers'
const server = new GraphQLServer({
  typeDefs:'./src/schema.graphql',
  resolvers:{
    Query,
    Mutation,
    Post,
    User,
    Comment
  },
  context:{
    db
  }
});
const options = {
  port: 8000,
  // endpoint: '/graphql',
  // subscriptions: '/subscriptions',
  // playground: '/playground',
};

server.start(options, ({ port }) =>
  console.log(
    `Server started, listening on port ${port} for incoming requests.`
  )
);
