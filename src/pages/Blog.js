import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Post from "../components/Post";
import axios from 'axios';

// GET request
const fetchData = async () => {
  try {
      const response = await axios.get('http://localhost:5000/api/data');
      console.log(response.data);
  } catch (error) {
      console.error(error);
  }
};

export default function Blog() {
  // const [data, setData] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);
  return (
    <section className="text-blue-400 bg-primary body-font">
    <main className="">
      <Navbar />
      <div className="grid grid-cols-2 gap-10 flex flex-row min-h-screen justify-center items-center">
        {/* {data} */}
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </main>
    </section>
  );
}
