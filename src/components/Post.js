import React from "react";
const Post = ({ 
	post: { title, body, imgUrl, author }, 
	index }) => {
return (
	<div className="post-container text-sea bg-primary lg:flex">
	<div className="flex-none">
	<h1 className="text-center text-3xl lg:text-5xl ">{title}</h1>
	<img className="h-auto max-w-full lg:w-[30vw] mx-auto" src={imgUrl} alt="post" />		
	</div>
	<div className="flex-initial bg-secondary text-sea">
	<p className=" text-left text-2xl px-5">{body}</p>
	<p className="text-center text-xl">Written by: {author}</p>
	</div>
	</div>
);
};

export default Post;
