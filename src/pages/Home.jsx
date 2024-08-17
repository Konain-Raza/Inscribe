import React from 'react';

const Home = () => {
  return (
    <section className="relative bg-white text-black overflow-hidden">
      <div className="absolute inset-0 z-0 flex justify-center items-center">
        <div className="w-[30rem] h-[30rem] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full filter blur-3xl opacity-50 animate-spin"></div>
        {/* <div className="absolute w-80 h-80 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full filter blur-2xl opacity-60 bottom-10 right-10 animate-bounce"></div> */}
      </div>
      <div className="relative z-10 py-12 px-6 mx-auto max-w-screen-xl text-center lg:py-24 lg:px-12">
        <a href="#" className="inline-flex justify-between items-center py-2 px-4 mb-8 text-sm text-gray-700 bg-gray-200 rounded-full hover:bg-gray-300 transition duration-200">
          <span className="text-xs bg-blue-600 text-white rounded-full px-4 py-1.5 mr-3">New ✨</span> 
          <span className="text-sm font-medium">Inscribe is here! Dive into the latest stories</span> 
          <svg className="ml-2 w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path>
          </svg>
        </a>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight leading-tight text-gray-900 md:text-6xl lg:text-7xl">
          Unleashing Stories, One Post at a Time 📚
        </h1>
        <p className="mb-10 text-lg font-normal text-gray-600 lg:text-xl xl:px-36">
          Welcome to Inscribe, where words dance 💃 and ideas soar 🚀. We blend creativity with a touch of wit to bring you blog posts as engaging as your favorite binge-worthy series.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 transition duration-200">
            Discover More
            <svg className="ml-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
          <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-gray-900 bg-gray-200 border border-gray-300 rounded-lg hover:bg-gray-300 focus:ring-4 focus:ring-gray-100 transition duration-200">
            <svg className="mr-2 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
            </svg>
            Watch Introduction 
          </a>  
        </div>
      </div>
    </section>
  );
};

export default Home;
