import React from "react";
import { Link } from "react-router-dom";
const Presentation = ({ 
    presentation: { names, date, title, location, link }, 
    index }) => {
return (
	<div className="presentation-container">
        <p>{names} ({date}). {title} Presented at {location} <Link to={link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 leading-relaxed">link</Link></p>
	</div>
);
};

export default Presentation;
