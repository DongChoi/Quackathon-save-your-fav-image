import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import { BrowserRouter } from "react-router-dom";
import RouteList from "./RouteList";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar>
          <div>
            <RouteList></RouteList>
          </div>
        </NavBar>
        <Home></Home>
      </BrowserRouter>
    </div>
  );
}

export default App;
