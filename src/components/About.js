export default function About() {
  return (
    <section id="about" className="bg-secondary">
      <div className="mx-auto px-2 lg:px-5 flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 flex flex-col text-white">
          <h1 className="text-3xl lg:text-5xl mb-4 font-medium">
            Alex Ov - Computer Engineer
          </h1>
          <p className="mb-2 text-xl lg:text-3xl">
          I am a highly motivated computer engineer seeking opportunities to employ my skills in the design of impactful robots and apps in the U.S.
          Utilizing my strong background in robotics and software engineering.
          </p>
          <div className="flex justify-center">
            <a href="#contact" className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-500 rounded text-lg">Contact Me</a>
            <a href="/project" className="ml-4 inline-flex bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 rounded text-lg">Projects</a>
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
              alt="Headshot of Alex Ov"
              src="./headshot_2024.jpg"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
