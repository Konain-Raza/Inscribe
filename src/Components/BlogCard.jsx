import React from 'react';
import { Link } from 'react-router-dom';
import DOMPurify from 'dompurify';

const BlogCard = ({ id, img, category, title, content, authorImg, authorName, date, likeCount, readTime }) => {
  const sanitizedContent = DOMPurify.sanitize(content);

  return (
    <div className="w-[25rem] rounded-[15px] overflow-hidden">
      <Link to={`/blog/${id}`} state={{ blog: { id, img, category, title, content: sanitizedContent, authorImg, authorName, date, likeCount, readTime } }}>
        <img
          className="rounded-lg w-full h-48 object-cover"
          src={img}
          alt={title}
        />
      </Link>
      <div className="p-4">
        <p className="text-blue-700 text-left mb-2">{category}</p>
        <Link to={`/blog/${id}`} state={{ blog: { id, img, category, title, content: sanitizedContent, authorImg, authorName, date, likeCount, readTime } }}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            {title}
          </h5>
        </Link>
        <p className="mb-3 text-gray-700 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: sanitizedContent.slice(0, 50) + (sanitizedContent.length > 150 ? '...' : '') }}></p>
        <p className="mb-3 text-gray-600 text-md italic">
          {readTime} min read
        </p>
        <div className="flex items-center mb-4">
          <img className="w-10 h-10 rounded-full" src={authorImg} alt={authorName} />
          <div className="ml-3">
            <p className="text-gray-900 dark:text-gray-900">{authorName}</p>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{date}</p>
          </div>
        </div>
     
      </div>
    </div>
  );
};

export default BlogCard;
