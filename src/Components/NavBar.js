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
        <div>
        <NavLink
            to="/"
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            Home
        </NavLink>
        <NavLink
            to="/products"
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            Product
        </NavLink>
        <NavLink
            to="/Login"
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            Login
        </NavLink>
        <NavLink
            to="/signup"
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            SignUp
        </NavLink>
        <NavLink
            to="/cart"
            exact
            style={linkStyles}
            activeStyle={{
            background: "darkblue",
            }}
        >
            Add to cart
        </NavLink>
        </div>
    </div>
  );
}

export default NavBar;