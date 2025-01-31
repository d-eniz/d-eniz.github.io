import { useState } from "react";
import profileImage from "../assets/deniz.png";

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
        I specialise in software engineering with a focus on full-stack development, data science, and machine learning.
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
            I am currently pursuing a master’s degree in biomedical engineering at UCL, where I’m combining my technical expertise with a passion for improving healthcare. My focus lies in the integration of software engineering, full-stack development, data science, and machine learning to create impactful solutions.
            <br></br><br></br>
            With a solid foundation in software development, I enjoy working on projects that challenge my problem-solving skills and push the boundaries of what technology can achieve in both engineering and healthcare. I’m particularly interested in leveraging data-driven insights to optimize processes and improve outcomes in medical and healthcare systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
