/*
TODO:
6/10/24
Finish gallery
update image sizes and names https://tiny-img.com/blog/best-image-size-for-website/
switch to using <Link> https://medium.com/@sezaigurle/difference-between-link-and-a-href-in-react-eb3106d7c5ab
https://github.com/remix-run/react-router/discussions/8588
*/
import React from 'react';
import Navbar from "../components/Navbar";
import About from "../components/About";
import Carousel from "../components/Carousel";
import Skills from "../components/Skills";
// import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import ProjectGallery from '../components/ProjectGallery';

function Home() {
  return (
    <main className="text-blue-400 bg-primary body-font">
        <div>    
            <Navbar />
            <About /> 
            <ProjectGallery />
            <Skills />
            {/* <Testimonials /> */}
            <Contact />
        </div>
    </main>
  );
}

export default Home;
