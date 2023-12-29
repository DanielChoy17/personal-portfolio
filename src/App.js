import React from 'react';
import NavBar from "./components/navbar/NavBar";
import { Route, Routes } from "react-router-dom";
import { Home } from "./screens/Home";
import { Experience } from "./screens/Experience";
import { Projects } from "./screens/Projects";
import { Certifications } from './screens/Certifications';
import { APIs } from './screens/APIs';
import { DarkModeProvider } from "./context/DarkModeContext";

function App() {
  return (
    <>
      <DarkModeProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/experience" element={<Experience/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/certifications" element={<Certifications/>}/>
          <Route path="/funwithapis" element={<APIs/>}/>
        </Routes>
      </DarkModeProvider>
    </>
  );
}

export default App;
