import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 w-screen py-6">
      <div className="container mx-auto text-center w-screen">
        <div className="mt-4 text-gray-500 dark:text-gray-400">
          Made with{' '}
          <span className="animate-pulse">❤️</span> by{' '}
          <a
            href="https://linkedin.com/in/konain-raza-"
            className="hover:underline text-gray-900 dark:text-gray-200"
          >
            Konain Raza
          </a>
        </div>
        <div className="mt-4 flex justify-center items-center space-x-4">
          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com/in/konain-raza-"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            aria-label="LinkedIn"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19 0H5C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8.316 19.169H5.3v-7.84h3.017v7.84zM6.809 9.516c-.966 0-1.608-.66-1.608-1.498 0-.846.654-1.498 1.634-1.498s1.608.652 1.631 1.498c0 .838-.642 1.498-1.631 1.498h-.026zM19 19.169h-3.017v-3.972c0-.948-.342-1.594-1.197-1.594-.652 0-1.039.439-1.21 1.069-.063.151-.08.363-.08.575v3.922H10.48v-7.84h3.017v1.07h.043c.401-.616 1.131-1.069 2.009-1.069 1.438 0 2.521 1.009 2.521 3.178v4.661z" />
            </svg>
          </a>
          
          {/* GitHub Icon */}
          <a
            href="https://github.com/Konain-Raza"
            className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
            aria-label="GitHub"
          >
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 .297c-6.627 0-12 5.373-12 12 0 5.308 3.438 9.81 8.206 11.4.599.111.82-.259.82-.577v-2.074c-3.338.727-4.04-1.615-4.04-1.615-.546-1.38-1.333-1.748-1.333-1.748-1.088-.746.083-.731.083-.731 1.205.084 1.835 1.244 1.835 1.244 1.072 1.838 2.81 1.305 3.493 1.001.107-.775.419-1.306.764-1.606-2.665-.304-5.467-1.332-5.467-5.926 0-1.308.467-2.374 1.235-3.22-.124-.303-.536-1.52.115-3.168 0 0 1.006-.322 3.299 1.233.957-.266 1.98-.398 3.003-.403 1.022.005 2.045.137 3.004.403 2.293-1.556 3.299-1.233 3.299-1.233.651 1.648.241 2.865.118 3.168.768.846 1.234 1.912 1.234 3.22 0 4.605-2.807 5.621-5.482 5.921.433.374.822 1.113.822 2.24v3.322c0 .319.22.693.826.575C20.565 22.108 24 17.608 24 12.297c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
