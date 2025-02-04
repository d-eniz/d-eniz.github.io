import { useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import "prismjs/themes/prism-tomorrow.css"; // Add your preferred theme

const PopupWindow = ({ isOpen, onClose, title, image, content }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    if (isOpen && popupRef.current) {
      requestAnimationFrame(() => {
        popupRef.current.classList.remove("opacity-0", "scale-75");
        popupRef.current.classList.add("opacity-100", "scale-100");
      });
    } else if (!isOpen && popupRef.current) {
      requestAnimationFrame(() => {
        popupRef.current.classList.remove("opacity-100", "scale-100");
        popupRef.current.classList.add("opacity-0", "scale-75");
      });
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center p-4 z-50 transition-opacity duration-300 ease-in-out"
      onClick={onClose}
    >
      <div
        ref={popupRef}
        className="bg-gray-800 rounded-lg shadow-xl p-8 w-full max-w-screen-lg max-h-[90vh] overflow-y-auto transform transition-all duration-500 ease-out opacity-0 scale-75 origin-center"
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-2xl font-semibold mb-4 text-gray-100">{title}</h3>
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-auto object-contain rounded-md mb-6"
          />
        )}
        <div className="prose prose-invert max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]} // Enable GitHub Flavored Markdown
            rehypePlugins={[rehypePrism]} // Enable syntax highlighting
            components={{
              code({ node, inline, className, children, ...props }) {
                if (inline) {
                  return (
                    <code
                      className="text-yellow-400 bg-gray-700 px-1 py-0.5 rounded-sm inline"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                }
                return (
                  <pre className={`language-${className}`}>
                    <code className="block">{children}</code>
                  </pre>
                );
              },
            }}
          >
            {content}
          </ReactMarkdown>
        </div>
        <button
          onClick={onClose}
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default PopupWindow;
