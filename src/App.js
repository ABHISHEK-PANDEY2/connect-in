import "./App.css";
import React from "react";
import { Routes, Route, Router } from "react-router-dom";
import Navbar from "./Navbar";
import TopNav from "./top-nav";

function App() {
  return (
    <div className="App">
      <TopNav />
      <Navbar />
    </div>
  );
}

export default App;
