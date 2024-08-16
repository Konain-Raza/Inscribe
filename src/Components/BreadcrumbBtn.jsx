import React from 'react';

const BreadcrumbBtn = ({ label }) => {
  return (
    <button
      type="button"
      className="bg-transparent text-gray-500  hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg px-10 py-4 text-center mr-2 mb-2 dark:text-gray-700  dark:hover:bg-blue-700 dark:focus:ring-blue-700"
    >
      {label}
    </button>
  );
};

export default BreadcrumbBtn;
