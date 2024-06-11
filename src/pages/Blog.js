import React from "react";
import Navbar from "../components/Navbar";
import Posts from "../components/Posts";
function Blog() {
    return (
      <main className="text-blue-400 bg-primary body-font">
          <div>
            <Navbar />    
            <Posts />
          </div>
      </main>
    );
  }
  
  export default Blog;
  