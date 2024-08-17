import React from 'react';
import { useLocation } from 'react-router-dom';
import DOMPurify from 'dompurify';

const BlogDetail = () => {
  const location = useLocation();
  const blog = location.state?.blog;

  if (!blog) {
    return (
      <section className="px-4 py-8">
        <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <p className="text-red-500 font-semibold text-center">No blog data available.</p>
        </div>
      </section>
    );
  }

  const sanitizedContent = DOMPurify.sanitize(blog.content);

  return (
    <section className="px-4 h-max">
      <div className="w-full  mx-auto p-10 pt-5">
        <img
          src={blog.img}
          alt={blog.title}
          className="w-full h-96 object-cover rounded-lg mb-6"
        />
        <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
        <p className="text-gray-600 text-lg mb-2">Category: <span className="font-semibold">{blog.category}</span></p>
        <p className="text-gray-600 text-lg mb-4"> <span className="font-semibold">{blog.readTime} min read</span></p>
        <p className="text-gray-800 text-base leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: sanitizedContent }}></p>
        <div className="flex items-center">
          <img
            className="w-14 h-14 rounded-full border-2 border-gray-200"
            src={blog.authorImg}
            alt={blog.authorName}
          />
          <div className="ml-4">
            <p className="text-gray-900 text-lg font-semibold">{blog.authorName}</p>
            <p className="text-gray-600 text-sm">{blog.date}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetail;
