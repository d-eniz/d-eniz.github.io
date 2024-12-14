import { useState } from "react";
import profileImage from "../assets/deniz.jpg";

const Hero = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto px-8 text-center">
        <img
          src={profileImage}
          alt="Deniz"
          className="w-48 h-48 rounded-full mx-auto mb-4"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-100">
          Hi, I'm Deniz
        </h1>
        <p className="text-xl text-gray-300 mb-16">
          A biomedical engineering student exploring innovative projects in data
          science, machine learning, and software engineering.
        </p>
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
        >
          {showMore ? "Less about me" : "More about me"}
        </button>
        <div
          className={`mt-8 transition-all duration-500 ease-in-out overflow-hidden ${
            showMore ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="bg-gray-700 p-6 rounded-lg">
            <p className="text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
