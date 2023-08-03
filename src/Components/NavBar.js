import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">
            <img src="/logo2.png" alt="logo" />
          </NavLink>
          <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to="/">
                  <i
                    className="bi bi-house p-2"
                    style={{ fontSize: "2rem", color: "black" }}
                  ></i>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/Login">
                  <i
                    className="bi bi-person-circle p-2"
                    style={{ fontSize: "2rem", color: "black" }}
                  ></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
