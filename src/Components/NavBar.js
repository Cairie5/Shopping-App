import React from "react";
import { NavLink } from "react-router-dom";



function NavBar() {

  return (
    <div>
      <nav style={{display:"flex", padding:"10px 20px", transition: "all .42s ease" }}>
        <div className="">
          <NavLink className="navbar-brand " to="/">
            <img src="/logo2.png" alt="logo" style={{width: "60px"}}/>
          </NavLink>
          <NavLink to="/" style={{transform: 'translateX(-360px)'}}>
            <i
              className="bi bi-house p-3 mt-5"
              style={{ fontSize: "2rem", color: "black"  }}
            ></i>
          </NavLink>          
          <NavLink to="/Login" style={{transform: 'translateY(1px) translateX(-700px)'}}>
            <i
              className="bi bi-person-circle p-3"
              style={{ fontSize: "2rem", color: "black" }}
            ></i>
          </NavLink>          
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
