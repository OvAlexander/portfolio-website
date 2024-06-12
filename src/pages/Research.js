import React from "react";
import Navbar from "../components/Navbar";
import Presentations from "../components/Presentations";
import Publications from "../components/Publications";
function Research() {
    return (
      <main className="text-blue-400 bg-primary body-font">
          <div className="">
            <Navbar />
            <Presentations />
            <Publications />
          </div>
      </main>
    );
  }
  
  export default Research;
  