/*
TODO:
6/10/24
Fix resume sizing
add social logos
*/
import React from "react";
import { Link } from "react-router-dom";
import emailjs from 'emailjs-com';
const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
const USER_ID = process.env.REACT_APP_USER_ID;

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <section id="contact" className="relative bg-secondary">
      <div className="container lg:w-100 h-100 px-5 py-10 mx-auto flex sm:flex-nowrap text-white">
        <div className="lg:w-3/4 h-100 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
        <iframe title="resume" src="./Alex_Ov_Resume.pdf" width="100%" height="100%" />
          <div className="bg-gray-900 relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-3/4 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                GitHub
              </h2>
              <Link to="https://github.com/OvAlexander" target="_blank" rel="noopener noreferrer" className="text-indigo-400 leading-relaxed">OvAlexander</Link>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                LinkedIn
              </h2>
              <Link to="https://www.linkedin.com/in/alexander-ov/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 leading-relaxed">linkedin.com/in/alexander-ov</Link>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                YouTube
              </h2>
              <Link to="https://www.youtube.com/channel/UCorcUB6JoebEWA81o-xSuXw" target="_blank" rel="noopener noreferrer" className="text-indigo-400 leading-relaxed">@alexanderlov</Link>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a href="/#" className="text-indigo-400 leading-relaxed">
                alexanderleeov@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">909-343-2257</p>
            </div>
          </div>
        </div>
        <form
          netlify
          name="contact"
          onSubmit={sendEmail}
          className="lg:w-1/4 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 text-white"
        >
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact Me
          </h2>
          <p className="leading-relaxed mb-5">Let's build things together!</p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="from_name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="subject" className="leading-7 text-sm">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="email_subject"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="message" className="leading-7 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="html_message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
