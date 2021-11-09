import * as React from "react";
import { Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
