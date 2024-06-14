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
            <div className="bg-secondary">
              <p><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />&nbsp;</p>
            </div>
          </div>
      </main>
    );
  }
  
  export default Research;
  