import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-md sticky top-0 z-50 w-full">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-xl font-bold text-gray-100">
          Deniz Terzioglu
        </a>
        <div className="hidden md:flex space-x-4">
          <a href="#skills" className="text-gray-300 hover:text-gray-100">
            Skills
          </a>
          <a href="#projects" className="text-gray-300 hover:text-gray-100">
            Projects
          </a>
          <a href="#blog" className="text-gray-300 hover:text-gray-100">
            Blog
          </a>
          <a href="#contact" className="text-gray-300 hover:text-gray-100">
            Contact
          </a>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-gray-700">
          <a
            href="#projects"
            className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-600"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-600"
          >
            Skills
          </a>
          <a
            href="#blog"
            className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-600"
          >
            Blog
          </a>
          <a
            href="#contact"
            className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-600"
          >
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
