let users = [
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
  let posts = [
    {
      id: "251f1ff8-44f4-4c21-be1b-99f313bac0ae",
      title: "GraphQL 101",
      body: "This is how to use GraphQL...",
      author: "2",
      published: true,
    },
    {
      id: "70c1e670-b372-4f38-9537-30c0d417eb16",
      title: "GraphQL 201",
      body: "This is an advanced GraphQL post...",
      author: "2",
      published: true,
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
  let comments = [
    {
      id: "1",
      text: "aaaaaaaaa",
      author: "1",
      post: "251f1ff8-44f4-4c21-be1b-99f313bac0ae",
    },
    {
      id: "1",
      text: "cccccccc",
      author: "1",
      post: "70c1e670-b372-4f38-9537-30c0d417eb16",
    },
    {
      id: "1",
      text: "bbbbbbb",
      author: "2",
      post: "70c1e670-b372-4f38-9537-30c0d417eb16",
    },
    {
      id: "2",
      text: "ddffssafaf",
      author: "2",
      post: "70c1e670-b372-4f38-9537-30c0d412233",
    },
  ];
  const db={
      users,
      posts,
      comments
  }
  export default db;