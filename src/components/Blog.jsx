import React, { useState } from "react";
import PopupWindow from "./PopupWindow";

// Function to calculate read time based on word count
const calculateReadTime = (content) => {
  const words = content.split(/\s+/).length;
  const wordsPerMinute = 200; // average reading speed
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
};

const blogPosts = [
  {
    id: 1,
    title: "My First Blog Post",
    date: "2023-06-01",
    content: `
# Welcome to my blog!

This is my first blog post. I'm excited to share my thoughts and experiences with you.

## What I'll be writing about

- Web development
- New technologies
- Personal projects
- Coding tips and tricks

Stay tuned for more content!
    `,
  },
  {
    id: 2,
    title: "Learning React Hooks",
    date: "2023-06-15",
    content: `
# Diving into React Hooks

React Hooks have revolutionized the way we write React components. In this post, I'll share my experience learning and using hooks.

## useState

The \`useState\` hook is great for managing local state in functional components. Here's a simple example:

\`\`\`jsx
const [count, setCount] = useState(0);
\`\`\`

## useEffect

\`useEffect\` is used for side effects in components. It's like componentDidMount, componentDidUpdate, and componentWillUnmount combined.

More to come as I explore other hooks!
    `,
  },
];

const Blog = () => {
  const [expandedPost, setExpandedPost] = useState(null);

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
