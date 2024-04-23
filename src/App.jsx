import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Home from "./Composants/Home";
import { PageOne } from "./Composants/PageOne";
import React, { useState } from "react";


export const Context = React.createContext()

function App() {


  const [url, useUrl] = useState("http://localhost:4000")


  return (
    <Context.Provider value={[url, useUrl]}>
      <nav>
        <NavLink to="/">Acceuil</NavLink>
        <br />
        <NavLink to="/PageOne">Page 01</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/PageOne" element={<PageOne />} />
      </Routes>
    </Context.Provider>
  );
}

export default App;
