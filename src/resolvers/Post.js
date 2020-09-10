const Post ={
    author: (_, args,{db}) => {
      return db.users.find((user) => {
        return user.id === _.author;
      });
    },
    comments: (parent, args, {db}, info) => {
      return db.comments.filter((comment) => {
        return comment.post === parent.id;
      });
    },
  }
  export {Post}