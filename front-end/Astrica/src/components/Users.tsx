import Components from "./Components";

function Users() {
  const UserList = [
    {
      username:"user 1",
      email:"email 1",
      password:"pass 1",
      profilePicture:"picture 1",
      isAdmin:"is Admin",
    },
    {
      username:"user 2",
      email:"email 2",
      password:"pass 2",
      profilePicture:"picture 2",
      isAdmin:"is Not Admin",
    },
    {
      username:"user 3",
      email:"email 3",
      password:"pass 3",
      profilePicture:"picture 3",
      isAdmin:"is Not Admin",
    },
    {
      username:"user 4",
      email:"email 4",
      password:"pass 4",
      profilePicture:"picture 4",
      isAdmin:"is Not Admin",
    },
    {
      username:"user 5",
      email:"email 5",
      password:"pass 5",
      profilePicture:"picture 5",
      isAdmin:"is Not Admin",
    },
  ];

  const attributeList = [
    "username",
    "email",
    "password",
    "profilePicture",
    "isAdmin",
  ];

  return (
    <Components componentList={UserList} attributeList={attributeList} listName="Users" />
  );
}

export default Users;
