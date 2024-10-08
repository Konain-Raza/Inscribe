import React from 'react';

const BreadcrumbBtn = ({ label, onClick, active }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={` text-gray-500 
        ${active ? 'bg-blue-700 text-white' : 'hover:bg-blue-700 hover:text-white'} 
        focus:outline-none focus:ring-4 focus:ring-blue-300 
        font-medium rounded-full text-lg px-10 py-4 text-center mr-2 mb-2 
        dark:text-white dark:hover:bg-blue-700 dark:focus:ring-blue-700`}
    >
      {label}
    </button>
  );
};

export default BreadcrumbBtn;
