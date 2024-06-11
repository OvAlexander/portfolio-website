import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Presentations from "../components/Presentations";
function Research() {
    return (
      <main className="text-blue-400 bg-primary body-font">
          <div>
            <Navbar />
                
            <Presentations />
          </div>
      </main>
    );
  }
  
  export default Research;
  