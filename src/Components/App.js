import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Cart from "./Cart";
import ProductDetail from "./ProductDetail";
import firebase from "../firebase"; // Import the firebase object

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    firebase.auth().signOut();
  };

  return (
    <div>
      <NavBar loggedIn={user !== null} />
      <Switch>
        <Route exact path="/cart">
          {user ? <Cart /> : <Redirect to="/login" />}
        </Route>
        <Route exact path="/signup">
          {user ? <Redirect to="/" /> : <Signup />}
        </Route>
        <Route exact path="/login">
          {user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/products/:id">
          <ProductDetail />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
