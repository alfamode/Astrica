import { useState } from "react";
import Posts from "./Posts.tsx";
import Comments from "./Comments.tsx";
import Users from "./Users.tsx";
import userLogo from "../assets/user.svg";

function NavBar() {
  const [expandCollapseToggle, setNavbarExpandToggle] = useState(
    "collapse navbar-collapse"
  );

  function navBarExpandHandler() {
    setNavbarExpandToggle(() =>
      expandCollapseToggle == "collapse navbar-collapse"
        ? "expand navbar-collapse"
        : "collapse navbar-collapse"
    );
  }

  const [activeMenuClass, setActiveMenuToggle] = useState(0);
  function setMenuHanlder(key: number) {
    setActiveMenuToggle(() => key);
  }

  function SelectedMenu() {
    switch (activeMenuClass) {
      case 1:
        return <Users />;
      case 2:
        return <Posts />;
      case 3:
        return <Comments />;
      default:
        return <></>;
    }
  }

  const [activeAdminInfoClass, setActiveAdminInfoToggle] = useState(true);
  function setAdminInfoHanlder() {
    setActiveAdminInfoToggle((prev) => !prev);
  }

  function adminInfoElement() {
    return (
      <div className="dropdown">
        <button
          className={
            activeAdminInfoClass == true
              ? "btn btn-secondary dropdown-toggle"
              : "btn btn-secondary dropdown-toggle show"
          }
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onClick={setAdminInfoHanlder}
        >
          <img src={userLogo} alt="user logo" />
        </button>
        <ul
          className={
            activeAdminInfoClass == true
              ? "dropdown-menu"
              : "dropdown-menu show"
          }
        >
          <li>
            <a className="dropdown-item" href="#">
              Name
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Picture
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Info
            </a>
          </li>
        </ul>
      </div>
    );
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <div>
            <a className="navbar-brand" href="#">
              Astrica
            </a>
          </div>
          <div>
            {adminInfoElement()}
            <button
              onClick={navBarExpandHandler}
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className={expandCollapseToggle} id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a
                className={
                  activeMenuClass == 1
                    ? "nav-list active"
                    : "nav-list text-decoration-none"
                }
                onClick={() => setMenuHanlder(1)}
                href="#"
              >
                Users
              </a>
              <a
                className={
                  activeMenuClass == 2
                    ? "nav-list active"
                    : "nav-list text-decoration-none"
                }
                onClick={() => setMenuHanlder(2)}
                aria-current="page"
                href="#"
                id="navbarPost"
              >
                Posts
              </a>
              <a
                className={
                  activeMenuClass == 3
                    ? "nav-list active"
                    : "nav-list text-decoration-none"
                }
                onClick={() => setMenuHanlder(3)}
                href="#"
                id="navbarComment"
              >
                Comments
              </a>
            </div>
          </div>
        </div>
      </nav>
      <h1>
        {activeMenuClass == 1
          ? "User"
          : activeMenuClass == 2
          ? "Post"
          : activeMenuClass == 3
          ? "Comment"
          : "Welcome!"}
      </h1>
      {activeMenuClass == 0 ? (
        <p>You can choose the menu from the list.</p>
      ) : (
        <></>
      )}
      <SelectedMenu />
    </>
  );
}

export default NavBar;
