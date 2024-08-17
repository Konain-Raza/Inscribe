import React from "react";
import { useLocation } from "react-router-dom";
import DOMPurify from "dompurify";

const BlogDetail = () => {
  const location = useLocation();
  const blog = location.state?.blog;

  if (!blog) {
    return (
      <section className="px-4 py-8 dark:bg-gray-900 dark:text-white">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6 dark:bg-gray-800 dark:border-gray-700">
          <p className="text-red-500 font-semibold text-center dark:text-red-400">
            No blog data available.
          </p>
        </div>
      </section>
    );
  }

  const sanitizedContent = DOMPurify.sanitize(blog.content);

  return (
    <section className="px-4 h-max dark:bg-gray-900 dark:text-white">
      <div className="w-full mx-auto p-10 pt-5">
      <img
  src={blog.img}
  alt={blog.title}
  className="w-full max-h-96 object-cover rounded-lg mb-6"
/>


        <h1 className="text-4xl font-bold mb-4 dark:text-gray-100">{blog.title}</h1>
        <p className="text-blue-600 text-xl mb-2 ">
          <span className="font-semibold">{blog.category}</span>
        </p>
        <p className="text-gray-600 text-lg mb-4 dark:text-gray-400">
          <span className="font-semibold">{blog.readTime} min read</span>
        </p>
        <p
          className="text-gray-800 text-base leading-relaxed mb-6 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        ></p>
        <div className="flex items-center">
          <img
            className="w-14 h-14 rounded-full border-2 border-gray-200 dark:border-gray-700"
            src={blog.authorImg}
            alt={blog.authorName}
          />
          <div className="ml-4">
            <p className="text-gray-900 text-lg font-semibold dark:text-gray-100">
              {blog.authorName}
            </p>
            <p className="text-gray-600 text-sm dark:text-gray-400">{blog.date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
