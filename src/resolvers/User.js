const User ={
    posts: (parent, args, {db}, info) => {
      return db.posts.filter((post) => {
        return post.author === parent.id;
      });
    },
    //one to many so use filter
    comments: (parent, args, {db}, info) => {
      return db.comments.filter((comment) => {
        return comment.author === parent.id;
      });
    },
  }
  export {User}