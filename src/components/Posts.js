import React from "react";
import Post from "./Post";

const Posts = () => {
    const blogPosts = [
        {
        title: "Portfolio Dev Log 6/10/24",
        body: `After several months of on an off development of my portfolio website, I have finally added a blog section and intend to make the website multipaged!
        While I would like to link the website to a backend due to the way I have deployed the website using Netlify it doesn't seem like it should be my number one
        priority. One resource that helped tremendously was this article from Medium https://medium.com/@reactcompany01/how-to-create-a-blog-app-with-reactjs-b8c0a56fcde1.
        Feeling very productive in this Google phone room!`,
        author: "Alex Ov",
        imgUrl: "./google.jpg",
        },
        {
        title: "Temp",
        body: `Temp text`,
        author: "Alex",
        imgUrl: "./temp.png",
        },
        {
            title: "Temp",
            body: `Temp text`,
            author: "Alex",
            imgUrl: "./temp.png",
        },
        {
            title: "Temp",
            body: `Temp text`,
            author: "Alex",
            imgUrl: "./temp.png",
        },
    ];
    return (
        <div className="posts-container">
        {blogPosts.map((post, index) => (
            <Post key={index} index={index} post={post} />
        ))}
        </div>
    );
    };
    export default Posts;