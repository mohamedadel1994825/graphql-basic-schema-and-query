import { gql } from "apollo-server-express";
export const defs = gql`
  type Query {
    hello: String
  }
 
`;
