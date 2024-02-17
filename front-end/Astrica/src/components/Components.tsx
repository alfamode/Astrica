import {
  JSXElementConstructor,
  ReactElement,
  ReactNode,
  ReactPortal,
  createElement,
  useState,
} from "react";
import buttonRequest from "./RequestHandler";
import editLogo from "../assets/edit.svg";
import checkLogo from "../assets/check.svg";
import infoLogo from "../assets/info.svg";
import commentLogo from "../assets/comment.svg";
import deleteLogo from "../assets/delete.svg";
import crossedLogo from "../assets/crossed.svg";
import plusLogo from "../assets/plus.svg";

interface UserInfoChange {
  username: string;
  email: string;
  password: string;
  profilePicture: string;
}
interface PostInfoChange {
  content: string;
  title: string;
  image: string;
  category: string;
}
interface CommentInfoChange {
  content: string;
}

const pageSizeList: number[] = [2, 5, 10];

function Components(props: {
  componentList: {
    [x: string]: any;
    content:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | null
      | undefined;
    postId:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | null
      | undefined;
    userId:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | null
      | undefined;
    likes:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | null
      | undefined;
    numberOfLikes:
      | string
      | number
      | boolean
      | ReactElement<any, string | JSXElementConstructor<any>>
      | Iterable<ReactNode>
      | ReactPortal
      | null
      | undefined;
  };
  attributeList: string[];
  listName: string;
}) {
  const componentList = props.componentList;
  const attributeList = props.attributeList;
  const listName = props.listName;
  const [pageNum, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(pageSizeList[0]);
  const maxPage = Math.ceil(componentList.length / pageSize);
  const [formDisplay, setFormDisplay] = useState(-1);
  const [selectedAction, setSelectedAction] = useState("");
  const [changedPostInfo, setChangedPostInfo] = useState<PostInfoChange>({
    content: "",
    title: "",
    image: "",
    category: "",
  });
  const [changedCommentInfo, setChangedCommentInfo] =
    useState<CommentInfoChange>({ content: "" });
  const [changedUserInfo, setChangedUserInfo] = useState<UserInfoChange>({
    username: "",
    email: "",
    password: "",
    profilePicture: "",
  });

  function setSelectedActionHandler(action: string) {
    if (selectedAction == "") {
      setSelectedAction(() => action);
    } else if (formDisplay == -1) {
      setSelectedAction(() => action);
    } else {      
      if (action != "edit") {
        setSelectedAction(() => action);
      } else {
        setSelectedAction(() => "");
      }
    }
  }
  function setFormDisplayHandler(index: number, displayOption: number) {
    if (formDisplay == -1) setFormDisplay(() => displayOption);
    else if (formDisplay == index) setFormDisplay(() => -1);
    else setFormDisplay(() => -1);
  }
  function editButton(listName: string, item: any, index: number) {
    return (
      <button
        className={selectedAction == "edit" ? "btn active" : "btn"}
        onClick={() => {
          buttonRequest("edit", listName, item, { hello: "there" });
          setSelectedActionHandler("edit");
          setFormDisplayHandler(index, index);
        }}
      >
        <img src={editLogo} alt="edit" />
      </button>
    );
  }
  function deleteButton(listName: string, item: any, index: number) {
    return (
      <button
        className={selectedAction == "delete" ? "btn active" : "btn"}
        onClick={() => {
          buttonRequest("delete", listName, item, { hello: "there" });
          setSelectedActionHandler("delete");
          setFormDisplayHandler(index, -1);
        }}
      >
        <img src={deleteLogo} alt="delete" />
      </button>
    );
  }
  function infoButton(listName: string, item: any, index: number) {
    return (
      <button
        className={selectedAction == "info" ? "btn active" : "btn"}
        onClick={() => {
          buttonRequest("info", listName, item, { hello: "there" });
          setSelectedActionHandler("info");
          setFormDisplayHandler(index, -1);
        }}
      >
        <img src={infoLogo} alt="info" />
      </button>
    );
  }
  function checkButton(listName: string, item: any, index: number) {
    return (
      <button
        className={selectedAction == "check" ? "btn active" : "btn"}
        onClick={() => {
          switch (listName) {
            case "Users":
              buttonRequest("check", listName, item, changedUserInfo);
              break;
            case "Posts":
              buttonRequest("check", listName, item, changedPostInfo);
              break;
            case "Comments":
              buttonRequest("check", listName, item, changedCommentInfo);
              break;
          }
          // setSelectedActionHandler("check");
          setFormDisplayHandler(index, -1);
        }}
      >
        <img src={checkLogo} alt="check" />
      </button>
    );
  }
  function approveButton(listName: string, item: any, index: number) {
    return (
      <button
        className={selectedAction == "approve" ? "btn active" : "btn"}
        onClick={() => {
          switch (listName) {
            case "Users":
              buttonRequest("approve", listName, item, changedUserInfo);
              break;
            case "Posts":
              buttonRequest("approve", listName, item, changedPostInfo);
              break;
            case "Comments":
              buttonRequest("approve", listName, item, changedCommentInfo);
              break;
          }
          setSelectedActionHandler("approve");
          setFormDisplayHandler(index, -1);
        }}
      >
        <img src={checkLogo} alt="approve" />
      </button>
    );
  }
  function commentButton(listName: string, item: any, index: number) {
    return (
      <button
        className={selectedAction == "comment" ? "btn active" : "btn"}
        onClick={() => {
          buttonRequest("comment", listName, item, { hello: "there" });
          setSelectedActionHandler("comment");
          setFormDisplayHandler(index, -1);
        }}
      >
        <img src={commentLogo} alt="comment" />
      </button>
    );
  }
  function crossedButton(listName: string, item: any, index: number) {
    return (
      <button
        className={selectedAction == "crossed" ? "btn active" : "btn"}
        onClick={() => {
          buttonRequest("crossed", listName, item, { hello: "there" });
          setSelectedActionHandler("crossed");
          setFormDisplayHandler(index, -1);
        }}
      >
        <img src={crossedLogo} alt="crossed" />
      </button>
    );
  }
  function plusButton(listName: string, item: any, index: number) {
    return (
      <button
        className={selectedAction == "plus" ? "btn active" : "btn"}
        onClick={() => {
          buttonRequest("plus", listName, item, { hello: "there" });
          setSelectedActionHandler("plus");
          setFormDisplayHandler(index, -1);
        }}
      >
        <img src={plusLogo} alt="plus" />
      </button>
    );
  }

  const [focusedItem, setFocusedItem] = useState(-1);
  function onFocusCompenent(listName: string, item: any, index: number) {
    switch (listName) {
      case "Users":
        return (
          <div>
            {editButton(listName, item, index)}
            {deleteButton(listName, item, index)}
            {infoButton(listName, item, index)}
          </div>
        );
      case "Posts":
        return (
          <div>
            {editButton(listName, item, index)}
            {deleteButton(listName, item, index)}
            {infoButton(listName, item, index)}
            {commentButton(listName, item, index)}
          </div>
        );
      case "Comments":
        return (
          <div>
            {editButton(listName, item, index)}
            {deleteButton(listName, item, index)}
            {approveButton(listName, item, index)}
            {crossedButton(listName, item, index)}
            {commentButton(listName, item, index)}
          </div>
        );
      default:
        console.log("Wrong name list were passed to decide on buttons.");
    }
  }
  function onDisplayFormCompenent(listName: string, item: any, index: number) {
    switch (listName) {
      case "Users":
        return (
          <div>
            <div>
              <label>
                Enter username:
                <input
                  type="text"
                  value={changedUserInfo.username}
                  onChange={(e) => {
                    setChangedUserInfo({
                      username: e.target.value,
                      email: changedUserInfo.email,
                      password: changedUserInfo.password,
                      profilePicture: changedUserInfo.profilePicture,
                    });
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                Enter email:
                <input
                  type="text"
                  value={changedUserInfo.email}
                  onChange={(e) => {
                    setChangedUserInfo({
                      email: e.target.value,
                      username: changedUserInfo.username,
                      password: changedUserInfo.password,
                      profilePicture: changedUserInfo.profilePicture,
                    });
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                Enter password:
                <input
                  type="text"
                  value={changedUserInfo.password}
                  onChange={(e) => {
                    setChangedUserInfo({
                      password: e.target.value,
                      email: changedUserInfo.email,
                      username: changedUserInfo.username,
                      profilePicture: changedUserInfo.profilePicture,
                    });
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                Enter profile picture:
                <input
                  type="text"
                  value={changedUserInfo.profilePicture}
                  onChange={(e) => {
                    setChangedUserInfo({
                      profilePicture: e.target.value,
                      email: changedUserInfo.email,
                      password: changedUserInfo.password,
                      username: changedUserInfo.username,
                    });
                  }}
                />
              </label>
            </div>
            <div>{checkButton(listName, item, index)}</div>
          </div>
        );
      case "Posts":
        return (
          <div>
            <div>
              <label>
                Enter content:
                <input
                  type="text"
                  value={changedPostInfo.content}
                  onChange={(e) => {
                    setChangedPostInfo({
                      content: e.target.value,
                      title: changedPostInfo.title,
                      image: changedPostInfo.image,
                      category: changedPostInfo.category,
                    });
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                Enter title:
                <input
                  type="text"
                  value={changedPostInfo.title}
                  onChange={(e) => {
                    setChangedPostInfo({
                      title: e.target.value,
                      content: changedPostInfo.content,
                      image: changedPostInfo.image,
                      category: changedPostInfo.category,
                    });
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                Enter image:
                <input
                  type="text"
                  value={changedPostInfo.image}
                  onChange={(e) => {
                    setChangedPostInfo({
                      image: e.target.value,
                      title: changedPostInfo.title,
                      content: changedPostInfo.content,
                      category: changedPostInfo.category,
                    });
                  }}
                />
              </label>
            </div>
            <div>
              <label>
                Enter category:
                <input
                  type="text"
                  value={changedPostInfo.category}
                  onChange={(e) => {
                    setChangedPostInfo({
                      category: e.target.value,
                      title: changedPostInfo.title,
                      image: changedPostInfo.image,
                      content: changedPostInfo.content,
                    });
                  }}
                />
              </label>
            </div>
            <div>{checkButton(listName, item, index)}</div>
          </div>
        );
      case "Comments":
        return (
          <div>
            <div>
              <label>
                Enter content:
                <input
                  type="text"
                  value={changedCommentInfo.content}
                  onChange={(e) => {
                    setChangedCommentInfo({
                      content: e.target.value,
                    });
                  }}
                />
              </label>
            </div>
            <div>{checkButton(listName, item, index)}</div>
          </div>
        );
      default:
        console.log(
          "Wrong name list were passed to decide on change form to be displayed."
        );
    }
  }

  function createAttributeList(item: any, index: number, listName: string) {
    const attributeArray = Array.from({ length: attributeList.length });
    for (let i = 0; i < attributeArray.length; i++) {
      attributeArray[i] = createElement(
        "p",
        {
          key: i,
          onClick: () => {
            if (focusedItem == -1) {
              setFocusedItem(() => index);
              if (formDisplay != -1) setFormDisplay(() => -1);
            } else if (focusedItem == index) {
              setFocusedItem(() => index);
              if (formDisplay != -1) setFormDisplay(() => -1);
            } else {
              setFocusedItem(() => index);
              setFormDisplay(() => -1);
            }
          },
          onMouseOver: () => {
            if (focusedItem == -1 && formDisplay == -1)
              setFocusedItem(() => index);
            else if (focusedItem != index && formDisplay == -1)
              setFocusedItem(() => index);
          },
        },
        attributeList[i] + " : " + item[attributeList[i]]
      );
    }
    return (
      <>
        <div>{attributeArray}</div>
        <div>
          {focusedItem == index ? (
            onFocusCompenent(listName, item, index)
          ) : (
            <></>
          )}
        </div>
        <div>
          {formDisplay == index ? (
            onDisplayFormCompenent(listName, item, index)
          ) : (
            <></>
          )}
        </div>
      </>
    );
  }

  function createComponentList() {
    return componentList
      .slice(pageNum * pageSize, (pageNum + 1) * pageSize)
      .map((item: any, index: any) => {
        return (
          <li
            key={index}
            className={
              "list-group-item" + (focusedItem == index ? " active" : "")
            }
          >
            {createAttributeList(item, index, listName)}
          </li>
        );
      });
  }

  function pageSelectionHandler(key: number) {
    if (key >= 0 && key < maxPage) setPageIndex(() => key);
  }

  function getPageNumArray() {
    const pageNumArray = Array.from({ length: maxPage });
    // map over the array using a for loop
    for (let i = 0; i < pageNumArray.length; i++) {
      pageNumArray[i] = createElement(
        "li",
        {
          key: i,
          className: "page-item" + (pageNum == i ? " active" : ""),
          onClick: () => pageSelectionHandler(i),
        },
        <a className="page-link" href="#">
          {i + 1}
        </a>
      );
    }
    return <>{pageNumArray}</>;
  }

  function pageSizeHandler(key: number) {
    setPageSize(() => key);
  }

  function getPageSizeArray() {
    const pageSizeArray = Array.from({ length: 3 });
    pageSizeArray[0] = createElement(
      "li",
      {
        key: 0,
        className: "page-item" + (pageSize == pageSizeList[0] ? " active" : ""),
        onClick: () => {
          pageSizeHandler(pageSizeList[0]);
          pageSelectionHandler(0);
        },
      },
      <a className="page-link" href="#">
        {pageSizeList[0]}
      </a>
    );
    pageSizeArray[1] = createElement(
      "li",
      {
        key: 1,
        className: "page-item" + (pageSize == pageSizeList[1] ? " active" : ""),
        onClick: () => {
          pageSizeHandler(pageSizeList[1]);
          pageSelectionHandler(0);
        },
      },
      <a className="page-link" href="#">
        {pageSizeList[1]}
      </a>
    );
    pageSizeArray[2] = createElement(
      "li",
      {
        key: 2,
        className: "page-item" + (pageSize == pageSizeList[2] ? " active" : ""),
        onClick: () => {
          pageSizeHandler(pageSizeList[2]);
          pageSelectionHandler(0);
        },
      },
      <a className="page-link" href="#">
        {pageSizeList[2]}
      </a>
    );
    return pageSizeArray;
  }

  return (
    <div>
      <ul className="list-group" key={pageNum}>
        {createComponentList()}
      </ul>
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li
              className="page-item"
              onClick={() => pageSelectionHandler(pageNum - 1)}
            >
              <a className="page-link" href="#">
                Previous
              </a>
            </li>
            {getPageNumArray()}
            <li className="page-item">
              <a
                className="page-link"
                onClick={() => pageSelectionHandler(pageNum + 1)}
                href="#"
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item">
              <a className="page-link" href="#">
                Page Size
              </a>
            </li>
            {getPageSizeArray()}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Components;
