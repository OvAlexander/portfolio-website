import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Project from "./pages/Project";
// import Navbar from "./components/Navbar";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Skills from "./components/Skills";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/project" element={<Project />}/>
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
