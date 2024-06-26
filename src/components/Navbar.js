import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
// import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <header className="bg-primary text-back md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a href="/#" className="title-font font-medium text-white mb-4 md:mb-0">
          <a href="/#about" className="ml-3 text-xl">
            Alex Ov
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="/blog" className="mr-5 hover:text-white">
            Blog
          </a>
          <a href="/project" className="mr-5 hover:text-white">
            Projects
          </a>
          <a href="/research" className="mr-5 hover:text-white">
            Research
          </a>
        </nav>
        <div className="">
          {/* <a
            className="items-center bg-accent border-0 py-1 px-3 focus:outline-none hover:bg-secondary rounded"
              href="https://github.com/OvAlexander"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
          </a>
          <a
            className="inline-flex items-center bg-accent border-0 py-1 px-3 focus:outline-none hover:bg-secondary rounded text-base mt-4 md:mt-0"
              href="https://www.linkedin.com/in/alexander-ov/"
              target="_blank"
              rel="noopener noreferrer"
            >
            linkedin
            </a> */}
          <a
            href="/#contact"
            className="inline-flex items-center bg-accent border-0 py-1 px-3 focus:outline-none hover:bg-secondary rounded text-base mt-4 md:mt-0"
          >
            Contact Me
            <ArrowRightIcon className="w-4 h-4 ml-1" />
          </a>
        </div>
      </div>
    </header>
  );
}
