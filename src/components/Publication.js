import React from "react";
import { Link } from "react-router-dom";
const Publication = ({ 
    publication: { names, date, title, publisher, link }, 
    index }) => {
return (
	<div className="text-sea">
        <p>{names} ({date}). {title}. {publisher} <Link to={link} target="_blank" rel="noopener noreferrer" className="text-indigo-400 leading-relaxed">link</Link></p>
	</div>
);
};

export default Publication;
