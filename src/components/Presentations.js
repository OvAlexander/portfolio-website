import React from "react";
import Presentation from "./Presentation";


export default function Presentations() {
    const presentationList = [
    {
        names: "M. Hoang and A. Ov,",
        date: "2024, April",
        title: "BANSHEE UAV (Battery as iNtegrated Structure High Endurance Experimental UAV, Robotics)",
        location: "the 38th Annual California State University Student Research Competition, Cal Poly SLO",
        link: "https://www.youtube.com/watch?v=1RgcapN3mkE",
    },
    {
        names: "M. Hoang, A. Ov, W. Zhu, S. Dobbs and Z. Yu,",
        date: "2023, April",
        title: "BANSHEE UAV (Battery as iNtegrated Structure High Endurance Experimental UAV, Robotics)",
        location: "National Conference on Undergraduate Research (NCUR)",
        link: "https://www.cur.org/wp-content/uploads/2024/05/NCUR-Abstract-Book-2024_Final.pdf#page=715"
    },
    {
        names: "M. Hoang, A. Ov, W. Zhu,",
        date: "2023, March",
        title: "BANSHEE UAV (Battery as iNtegrated Structure High Endurance Experimental UAV, Robotics)",
        location: "CPP (RSCA)",
        link: "https://www.youtube.com/watch?v=hrklcV7UqH0",
    },
    {
        names: "A. Ov,",
        date: "2023, March",
        title: "YOLOv8 Benchmarking",
        location: "CPP (RSCA)",
        link: "https://www.cpp.edu/cppsrc/current-conference/program/presenter-directory.shtml#",
    },
    ];
  return (
    <div>
        <div>
            <h1 className="bg-primary text-5xl px-3">Presentations</h1>
        </div>
        <div className="bg-secondary text-xl px-3">
            {presentationList.map((presentation, index) => (
                <Presentation key={index} index={index} presentation={presentation} />
            ))}
        </div>
    </div>
  );
}
