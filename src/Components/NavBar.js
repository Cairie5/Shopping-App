import React from "react";
import { NavLink } from "react-router-dom";

const linkStyles = {
  display: "inline-block",
  width: "50px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

function NavBar() {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <div class="navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#"><NavLink to="/"><i class="bi bi-house"></i></NavLink></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><NavLink to="/Login"><i class="bi bi-person-circle"></i></NavLink></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><NavLink to="/signup"><i class="bi bi-box-arrow-in-right"></i></NavLink></a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#"><NavLink to="/cart"><i class="bi bi-cart-fill position-absolute top-0 end-0 m-2 p-2 bi-2x"></i></NavLink></a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  );
}

export default NavBar;