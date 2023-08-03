import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() {

  return (
    <div>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
        <div className="navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item" >
                <NavLink to="/">
                    <i className="bi bi-house p-2 " style={{fontSize: "2rem", color: "black" }}></i>
                </NavLink>
            </li>
            <li className="nav-item">
                    <NavLink to="/Login">
                        <i className="bi bi-person-circle  p-2" style={{fontSize: "2rem", color: "black" }}></i>
                    </NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">
                        <i className="bi bi-cart-fill position-absolute top-0 end-0 m-4 " style={{fontSize: "2rem", color: "cornflowerblue" }}   onClick={() => {const cart = document.querySelector(".cart");cart.classList.add("active");}}></i>                   
                </a>
            </li>
            </ul>
        </div>
        </div>
    </nav>
    </div>
  );
}

export default NavBar;