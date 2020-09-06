import { GraphQLServer } from "graphql-yoga";
import { gql } from "apollo-server-express";
const users = [
  {
    id: "1",
    name: "Andrew",
    email: "andrew@example.com",
  },
  {
    id: "2",
    name: "Sarah",
    email: "sarah@example.com",
  },
  {
    id: "3",
    name: "Michael",
    email: "michael@example.com",
  },
];
const posts = [
  {
    id: "251f1ff8-44f4-4c21-be1b-99f313bac0ae",
    title: "GraphQL 101",
    body: "This is how to use GraphQL...",
    author: "1",
    published: true,
  },
  {
    id: "70c1e670-b372-4f38-9537-30c0d417eb16",
    title: "GraphQL 201",
    body: "This is an advanced GraphQL post...",
    author: "2",
    published: false,
  },
  {
    id: "3711c8d7-86ff-4116-ac95-96aabb338986",
    title: "Programming1 Music",
    body:
      "David Cutter Music is my favorite artist to listen to while programming.",
    author: "2",
    published: false,
  },
  {
    id: "70c1e670-b372-4f38-9537-30c0d412233",
    title: "Programming2",
    body:
      "David Cutter Music is my favorite artist to listen to while programming.",
    author: "1",
    published: false,
  },
];
const comments = [
  {
    id: "1",
    text: "aaaaaaaaa",
    post: "1",
    author: "1",
    post: "251f1ff8-44f4-4c21-be1b-99f313bac0ae",
  },
  {
    id: "1",
    text: "cccccccc",
    post: "1",
    author: "1",
    post: "70c1e670-b372-4f38-9537-30c0d417eb16",
  },
  {
    id: "1",
    text: "bbbbbbb",
    post: "1",
    author: "2",
    post: "70c1e670-b372-4f38-9537-30c0d417eb16",
  },
  {
    id: "1",
    text: "ddffssafaf",
    post: "1",
    author: "2",
    post: "70c1e670-b372-4f38-9537-30c0d412233",
  },
];
const typeDefs = gql`
  type Query {
    users(query: String): [User!]!
    posts(query: String): [Post!]!
    comments(query: String): [Comment!]!
    me: User!
    post: Post!
  }
  type User {
    name: String!
    id: ID!
    email: String!
    age: Int
    posts: [Post!]!
    comments: [Comment!]!
  }
  type Post {
    id: ID!
    title: String!
    body: String!
    published: Boolean!
    author: User!
    comments: [Comment!]!
  }
  type Comment {
    id: String!
    text: String!
    author: User!
    post: Post!
  }
`;
const resolvers = {
  Query: {
    me: () => {
      return {
        name: "mohamed",
        id: "23rd",
        email: "dfjdf@dd.com",
        age: 1,
      };
    },
    post: () => {
      return {
        id: "3444",
        title: "hello post",
        body: "hello body",
        published: true,
        // author: {
        //   id: 1,
        // },
      };
    },
    users: (_, args) => {
      if (!args.query) {
        return users;
      }
      return users.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts: (_, args) => {
      if (!args.query) {
        return posts;
      }
      return posts.filter((post) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },
    comments: (parent, args, cnt, info) => {
      if (!args.query) {
        return comments;
      }
      return comments.filter((comment) => {
        return comment.text.toLowerCase().includes(args.query.toLowerCase());
      });
    },
  },
  Post: {
    author: (_, args) => {
      return users.find((user) => {
        return user.id === _.author;
      });
    },
    comments: (parent, args, cnt, info) => {
      return comments.filter((comment) => {
        return comment.post === parent.id;
      });
    },
  },
  User: {
    posts: (parent, args, cnt, info) => {
      return posts.filter((post) => {
        return post.author === parent.id;
      });
    },
    //one to many so use filter
    comments: (parent, args, cnt, info) => {
      return comments.filter((comment) => {
        return comment.author === parent.id;
      });
    },
  },
  Comment: {
    //one to one so use find
    author: (parent, args, cnt, info) => {
      return users.find((user) => {
        return user.id === parent.author;
      });
    },
    post: (parent, arg, cnt, info) => {
      return posts.find((post) => {
        return post.id === parent.post;
      });
    },
  },
};
const server = new GraphQLServer({
  typeDefs,
  resolvers,
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
