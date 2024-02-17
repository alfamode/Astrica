import { createElement } from "react";

function Article(props: any) {
  const articleContent = props.articleContent;
  const attributeList = [
    "userId",
    "content",
    "title",
    "image",
    "category",
    "slug",
  ];
  const contentArray = Array.from({ length: attributeList.length });
  for (let i = 0; i < contentArray.length; i++) {
    contentArray[i] = createElement(
      "p",
      {
        key: i,
        onClick: () => {},
        onMouseOver: () => {},
      },
      attributeList[i] + " : " + articleContent[attributeList[i]]
    );
  }
  return <>{contentArray}</>;
}

export default Article;
