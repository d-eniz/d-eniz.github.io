const skills = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "MATLAB",
  "React",
  "Node.js",
  "Flask",
  "JavaScript",
  "Git",
];

const Skills = () => {
  return (
    <section id="skills" className="bg-gray-800 py-0 pb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-100 px-4 py-2 rounded-full text-sm font-semibold"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
