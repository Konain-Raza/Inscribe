import React from 'react';

const BlogCard = ({ img, category, title, content, authorImg, authorName, date, readTime }) => {
  return (
    <div className="max-w-[28rem] rounded-[15px] p-5">
      <a href="#">
        <img
          className="rounded-[17px] w-full"
          src={img}
          alt={title}
        />
      </a>
      <div className="p-3">
        <p className="text-blue-700 text-left mb-2">{category}</p>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {content}
        </p>
        <p className="mb-3 text-gray-600 text-md italic">
          Estimated read time: {readTime}
        </p>
        <div className="flex items-center mt-5">
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
