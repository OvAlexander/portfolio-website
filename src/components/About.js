export default function About() {
  return (
    <section id="about" className="bg-secondary">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center text">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-white">
          <h1 className="title-font sm:text-7xl text-7xl mb-4 font-medium text-back">
            Alex Ov - Computer Engineer
            <br className="" />
          </h1>
          <p className="mb-8 sm:text3xl text-3xl leading-relaxed">
          I am a highly motivated computer engineer seeking opportunities to employ my skills in the design of impactful robots and apps in the U.S.
          Utilizing my strong background in robotics and software engineer.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg"
            >
              Contact Me
            </a>
            <a
              href="/project"
              className="ml-4 inline-flex bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg"
            >
              Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-sm lg:w-full md:w-1/2 w-5/6 rounded-lg border-8 border-transparent overflow-hidden transition-all duration-300 hover:border-accent">
          <a
            href="https://www.linkedin.com/in/alexander-ov/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="./headshot.jpg"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
