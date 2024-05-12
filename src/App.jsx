import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Composants/Home";
import { PageOne } from "./Composants/PageOne";
import React from "react";



function App() {


  return (
    <>
      <nav>
        <NavLink to="/">Acceuil</NavLink>
        <br />
        <NavLink to="/PageOne">Page 01</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageOne" element={<PageOne />} />
      </Routes>
    </>
  );
}

export default App;
