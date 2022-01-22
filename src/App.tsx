import "bootswatch/dist/sandstone/bootstrap.css"
import 'bootstrap/dist/js/bootstrap.js';
import "./App.css"
import React from 'react';
import Header from "./components/Header";
import Profile from "./components/Profile";
// @ts-ignore
import Navbar from "./components/Navbar";


function App() {
  return (
      <div className="app-wrapper">
        <Header/>
        <Profile/>
        <Navbar></Navbar>
      </div>
  );
}

export default App;
