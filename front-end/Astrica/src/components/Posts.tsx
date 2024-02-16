import Components from "./Components";

function Posts() {
  const PostList = [
    {
      userId: "user 1",
      content: "content 1",
      title: "title 1",
      image: "image 1",
      category: "category 1",
      slug: "slug!",
    },
    {
      userId: "user 1",
      content: "content 2",
      title: "title 2",
      image: "image 2",
      category: "category 2",
      slug: "slug!",
    },
    {
      userId: "user 1",
      content: "content 3",
      title: "title 3",
      image: "image 3",
      category: "category 3",
      slug: "slug!",
    },
    {
      userId: "user 2",
      content: "content 4",
      title: "title 4",
      image: "image 4",
      category: "category 4",
      slug: "slug!",
    },
  ];

  const attributeList = [
    "userId",
    "content",
    "title",
    "image",
    "category",
    "slug"
  ];

  return <Components componentList={PostList} attributeList={attributeList} listName="Posts" />;
}

export default Posts;
