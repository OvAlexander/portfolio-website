import React from "react";
import Post from "./Post";

const Posts = () => {
    const blogPosts = [
        {
        title: "Portfolio Dev Log 6/11/24",
        body: `Flexible and accessibility is a crucial aspect of any product! Today my main focus on developing my portfolio was increasing the accesiblity and responsivness
        of the site this was all demoed using the blog site! Through today's development it is clear that going forward I should branch off main and create "testing"
        enviroments allowing me to make large sweeping changes and have checkpoints this will allow me to do comparisions of old and new code while also being able to rollback anytime
        Going forward into the development of this site I will attempt to intergrate more responsiveness from the start and look into other accesiblity features such as alt text.
        Aside from responsivness changes I added a new tab for research where I will display my conferences and publications.`,
        author: "Alex",
        imgUrl: "./blog_reponsive.png",
        },
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
            title: "Portfolio Dev Log 6/10/24",
            body: `After several months of on an off development of my portfolio website, I have finally added a blog section and intend to make the website multipaged!
            While I would like to link the website to a backend due to the way I have deployed the website using Netlify it doesn't seem like it should be my number one
            priority. One resource that helped tremendously was this article from Medium https://medium.com/@reactcompany01/how-to-create-a-blog-app-with-reactjs-b8c0a56fcde1.
            Feeling very productive in this Google phone room!`,
            author: "Alex Ov",
            imgUrl: "./google.jpg",
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