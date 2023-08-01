import React from 'react';
import {Route, Switch } from "react-router-dom";
import NavBar from "./NavBar"
import Home from "./Home"
import Login from './Login';
import ProductList from "./ProductList";
import Search from "./Search";
import Signup from './Signup';
import Cart from './Cart';
import ProductDetail from './ProductDetail';


function App() {
  return (
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/cart">
            <Cart />
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/products">
            <ProductList />
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
