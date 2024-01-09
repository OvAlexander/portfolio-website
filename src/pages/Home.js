import React from 'react';
import Navbar from "../components/Navbar";
import About from "../components/About";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";

function Home() {
  return (
    <main className="text-blue-400 bg-primary body-font">
        <div>    
            <Navbar />
            <About /> 
            <Projects />
            <Skills />
            {/* <Testimonials /> */}
            <Contact />
        </div>
    </main>
  );
}

export default Home;
