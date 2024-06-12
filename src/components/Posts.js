import React from "react";
import Post from "./Post";

const Posts = () => {
    const blogPosts = [
        {
            title: "Portfolio Dev Log 6/12/24",
            body: `Bug squashing can be very frustrating at times especially when hours are spent on the same problem, but through lots of Googling and trial and error any bug is able to fixed!
            I spent many hours toiling away trying to figure out why the React Browser Router was not working in tandem with Netlify. From my understanding Netlify uses and HTML static routing
            approach while React uses Javascript to handle this therefore you need a special _redirect file to return to React's index.html. While I was actually able to stumble upon this solution
            quite quick the most frustrating part was Netlify's build process on the website failed to properly include it. This was all solved after building through their CLI. Aside from frustrating
            bugs I learned that working in a cubical can be a quite refreshing change of pace from where I normally work. The mundane grey and white walls really allow me to focus in on my work even
            without music! Quietly and diligently working from a Qualcomm cubicle`,
            author: "Alex Ov",
            imgUrl: "./qualcomm.jpg",
        },
        {
        title: "Portfolio Dev Log 6/11/24",
        body: `Flexible and accessibility is a crucial aspect of any product! Today my main focus on developing my portfolio was increasing the accessibility and responsiveness
        of the site this was all demoed using the blog site! Through today's development it is clear that going forward I should branch off main and create "testing"
        environments allowing me to make large sweeping changes and have checkpoints this will allow me to do comparisons of old and new code while also being able to rollback anytime
        Going forward into the development of this site I will attempt to integrate more responsiveness from the start and look into other accessibility features such as alt text.
        Aside from responsiveness changes I added a new tab for research where I will display my conferences and publications.`,
        author: "Alex Ov",
        imgUrl: "./blog_reponsive.png",
        },
        {
        title: "Portfolio Dev Log 6/10/24",
        body: `After several months of on an off development of my portfolio website, I have finally added a blog section and intend to make the website multi-paged!
        While I would like to link the website to a backend due to the way I have deployed the website using Netlify it doesn't seem like it should be my number one
        priority. One resource that helped tremendously was this article from Medium https://medium.com/@reactcompany01/how-to-create-a-blog-app-with-reactjs-b8c0a56fcde1.
        Feeling very productive in this Google phone room!`,
        author: "Alex Ov",
        imgUrl: "./google.jpg",
        },
    ];
    return (
        <div className="">
        {blogPosts.map((post, index) => (
            <Post key={index} index={index} post={post} />
        ))}
        </div>
    );
    };
    export default Posts;