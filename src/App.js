import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
import Research from "./pages/Research";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/project" element={<Project />}/>
        <Route path="/research" element={<Research />}/>
      </Routes>
    </BrowserRouter>
    // <main className="text-blue-400 bg-primary body-font">
    //   <Navbar />
    //   <About /> 
    //   <Projects />
    //   <Skills />
    //   <Testimonials />
    //   <Contact />
    // </main>
  );
}
