import Components from "./Components";

function Comments() {
  const CommentList = [
    {
      content: "content of comment 1",
      postId: "post 1",
      userId: "user 1",
      likes: "user 1, user 2",
      numberOfLikes: "12",
    },
    {
      content: "content of comment 2",
      postId: "post 1",
      userId: "user 1",
      likes: "user 1, user 2, user 3",
      numberOfLikes: "13",
    },
    {
      content: "content of comment 3",
      postId: "post 1",
      userId: "user 2",
      likes: "user 1, user 3",
      numberOfLikes: "14",
    },
    {
      content: "content of comment 4",
      postId: "post 2",
      userId: "user 3",
      likes: "user 1, user 3, user 4",
      numberOfLikes: "15",
    },
    {
      content: "content of comment 5",
      postId: "post 3",
      userId: "user 4",
      likes: "user 1, user 3, user 4",
      numberOfLikes: "16",
    },
    {
      content: "content of comment 6",
      postId: "post 3",
      userId: "user 4",
      likes: "user 1, user 3, user 4",
      numberOfLikes: "16",
    },
    {
      content: "content of comment 7",
      postId: "post 3",
      userId: "user 4",
      likes: "user 1, user 3, user 4",
      numberOfLikes: "16",
    },
    {
      content: "content of comment 8",
      postId: "post 3",
      userId: "user 4",
      likes: "user 1, user 3, user 4",
      numberOfLikes: "16",
    },
    {
      content: "content of comment 9",
      postId: "post 3",
      userId: "user 4",
      likes: "user 1, user 3, user 4",
      numberOfLikes: "16",
    },
    {
      content: "content of comment 10",
      postId: "post 3",
      userId: "user 4",
      likes: "user 1, user 3, user 4",
      numberOfLikes: "16",
    },
  ];

  const attributeList = [
    "content",
    "postId",
    "userId",
    "likes",
    "numberOfLikes",
  ];

  return (
    <Components componentList={CommentList} attributeList={attributeList} listName="Comments" />
  );
}

export default Comments;
