import React from "react";
import { NavLink } from "react-router-dom";
import firebase from "../firebase";

function NavBar({ loggedIn }) {
  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-secondary bg-opacity-50">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src="/logo2.png" alt="logo" style={{ width: "60px" }} />
          </NavLink>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/" exact>
                  <i
                    className="bi bi-house p-2 m-1"
                    style={{ fontSize: "2rem", color: "black" }}
                  ></i>
                </NavLink>
              </li>
              <li className="nav-item">
                {loggedIn ? (
                  <>
                    <NavLink to="/">
                      <button
                        onClick={handleLogout}
                        className="nav-link btn btn-link"
                      >
                        Logout
                      </button>
                    </NavLink>
                  </>
                ) : (
                  <NavLink to="/login">
                    <i
                      className="bi bi-person-circle p-2 m-2"
                      style={{ fontSize: "2rem", color: "black" }}
                    ></i>
                  </NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
