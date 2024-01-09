import React from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";

export default function Blog() {
  return (
    <section className="text-blue-400 bg-primary body-font">
    <main className="">
      <Navbar />
      <div className="grid grid-cols-2 gap-10 flex flex-row min-h-screen justify-center items-center">
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
    </section>
  );
}
