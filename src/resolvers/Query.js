const Query= {
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
    users: (_, args,{db}) => {
      if (!args.query) {
        return db.users;
      }
      return udb.sers.filter((user) => {
        return user.name.toLowerCase().includes(args.query.toLowerCase());
      });
    },
    posts: (_, args,{db}) => {
      if (!args.query) {
        return db.posts;
      }
      return db.posts.filter((post) => {
        const isTitleMatch = post.title
          .toLowerCase()
          .includes(args.query.toLowerCase());
        const isBodyMatch = post.body
          .toLowerCase()
          .includes(args.query.toLowerCase());
        return isTitleMatch || isBodyMatch;
      });
    },
    comments: (parent, args, {db}, info) => {
      if (!args.query) {
        return db.comments;
      }
      return db.comments.filter((comment) => {
        return db.comment.text.toLowerCase().includes(args.query.toLowerCase());
      });
    },
  }
export {Query}