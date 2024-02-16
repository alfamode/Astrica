const CommentAttributeList = [
  "content",
  "postId",
  "userId",
  "likes",
  "numberOfLikes",
];
const PostAttributeList = [
  "userId",
  "content",
  "title",
  "image",
  "category",
  "slug",
];
const UserAttributeList = [
  "username",
  "email",
  "password",
  "profilePicture",
  "isAdmin",
];
const listOfAttributes = [
  CommentAttributeList,
  PostAttributeList,
  UserAttributeList,
];
const listOfChangedAttributes = [
  ["content"],
  ["content", "title", "image", "category"],
  ["username", "email", "password", "profilePicture"],
];

function buttonRequest(
  action: string,
  listName: string,
  item: any,
  changes: any
) {
  let outputOfItem: string = "";
  outputOfItem += "List: " + listName + "\nAction: " + action + "\nItem -> \n";
  const attributeList =
    listOfAttributes[
      listName == "Comments"
        ? 0
        : listName == "Posts"
        ? 1
        : listName == "Users"
        ? 2
        : 0
    ];
  const changedAttributeList =
    listOfChangedAttributes[
      listName == "Comments"
        ? 0
        : listName == "Posts"
        ? 1
        : listName == "Users"
        ? 2
        : 0
    ];
  for (let i = 0; i < attributeList.length; i++) {
    outputOfItem +=
      "  " + attributeList[i] + " : " + item[attributeList[i]] + "\n";
  }
  outputOfItem += "Changes -> \n";
  for (let i = 0; i < changedAttributeList.length; i++) {
    outputOfItem +=
      "  " + changedAttributeList[i] + " : " + changes[changedAttributeList[i]] + "\n";
  }
  console.log(outputOfItem);

  switch (action) {
    case "edit":
      return editButtonRequest(listName, item, changes);
    case "check":
      return checkButtonRequest(listName, item, changes);
    case "delete":
      return deleteButtonRequest(listName, item, changes);
    case "info":
      return infoButtonRequest(listName, item, changes);
    case "comment":
      return commentButtonRequest(listName, item, changes);
    case "crossed":
      return crossedButtonRequest(listName, item, changes);
    case "plus":
      return plusButtonRequest(listName, item, changes);
  }
}

export function editButtonRequest(listName: string, item: any, changes: any) {
  switch (listName) {
    case "Users":
      return 1;
    case "Posts":
      return 2;
    case "Comments":
      return 3;
  }
}
export function checkButtonRequest(listName: string, item: any, changes: any) {
  switch (listName) {
    case "Users":
      return 1;
    case "Posts":
      return 2;
    case "Comments":
      return 3;
  }
}
export function deleteButtonRequest(listName: string, item: any, changes: any) {
  switch (listName) {
    case "Users":
      return 1;
    case "Posts":
      return 2;
    case "Comments":
      return 3;
  }
}
export function infoButtonRequest(listName: string, item: any, changes: any) {
  switch (listName) {
    case "Users":
      return 1;
    case "Posts":
      return 2;
    case "Comments":
      return 3;
  }
}
export function commentButtonRequest(
  listName: string,
  item: any,
  changes: any
) {
  switch (listName) {
    case "Users":
      return 1;
    case "Posts":
      return 2;
    case "Comments":
      return 3;
  }
}
export function crossedButtonRequest(
  listName: string,
  item: any,
  changes: any
) {
  switch (listName) {
    case "Users":
      return 1;
    case "Posts":
      return 2;
    case "Comments":
      return 3;
  }
}
export function plusButtonRequest(listName: string, item: any, changes: any) {
  switch (listName) {
    case "Users":
      return 1;
    case "Posts":
      return 2;
    case "Comments":
      return 3;
  }
}

export default buttonRequest;
