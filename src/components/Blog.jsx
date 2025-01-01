import React, { useState, useEffect } from "react";
import PopupWindow from "./PopupWindow";

const calculateReadTime = (content) => {
  const words = content.split(/\s+/).length;
  const wordsPerMinute = 200; // average reading speed
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [expandedPost, setExpandedPost] = useState(null);

  useEffect(() => {
    fetch("/posts.json")
      .then((response) => response.json())
      .then((data) => {
        const sortedPosts = data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setBlogPosts(sortedPosts);
      })
      .catch((error) => console.error("Error fetching posts:", error));
  }, []);

  return (
    <section id="blog" className="bg-gray-800 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-gray-100">
          Blog
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-700 rounded-lg shadow-md p-6 cursor-pointer transition duration-300 ease-in-out border-2 border-transparent hover:border-blue-500"
              onClick={() => setExpandedPost(post.id)}
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-100">
                {post.title}
              </h3>
              <p className="text-gray-400">{post.date}</p>
              {/* Display read time */}
              <p className="text-gray-500 mt-2">{calculateReadTime(post.content)}</p>
            </div>
          ))}
        </div>
      </div>
      <PopupWindow
        isOpen={expandedPost !== null}
        onClose={() => setExpandedPost(null)}
        title={
          expandedPost
            ? blogPosts.find((post) => post.id === expandedPost).title
            : ""
        }
        content={
          expandedPost
            ? blogPosts.find((post) => post.id === expandedPost).content
            : ""
        }
      />
    </section>
  );
};

export default Blog;
