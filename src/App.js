import React from 'react';
import './App.css';
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Experience } from "./screens/Experience";
import { Projects } from "./screens/Projects";

function App() {
  return (
    <>
      <NavBar />
      <div className="pages">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
