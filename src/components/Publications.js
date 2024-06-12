import React from "react";
import Publication from "./Publication";


export default function Publications() {
    const publicationList = [
    {
        names: "M. Hoang, A. Ov, S. Chen, D. Huynh, Y. Karwal, S. Ahmed, N. Kim, J. Vega, S. Nunna, M. Nastase, H. Song, B. Lam, S. Dobbs, and Z. Yu.",
        date: "2024",
        title: "Design of Autonomous Battery Swapping for UAVs",
        publisher: "IEEE/ASME International Conference on Advanced Intelligent Mechatronics (IEEE AIM)",
        link: "",
    },
    ];
  return (
    <div>
        <div>
            <h1 className="bg-primary text-5xl px-3">Publications</h1>
        </div>
        <div className="bg-secondary text-xl px-3">
            {publicationList.map((publication, index) => (
                <Publication key={index} index={index} publication={publication} />
            ))}
        </div>
    </div>
  );
}
