import React from "react";
import BreadcrumbBtn from "../Components/BreadcrumbBtn";
import BlogCard from "../Components/BlogCard";
import img from "../assets/text.png"; // Ensure this image exists

const Blog = () => {
  const buttons = ["All", "Konain", "Ali", "Raza", "Tech", "Health"];
  const cardData = [
    {
      img,
      category: 'Technology',
      title: 'Noteworthy technology acquisitions 2021',
      content: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.',
      authorImg: '/docs/images/authors/author-1.jpg',
      authorName: 'John Doe',
        readTime:"5 min read",
      date: 'March 18, 2021',
    },
    {
      img,
      category: 'Business',
      title: 'The future of AI in business',
      content: 'Exploring the potential impacts of AI on the business landscape in the coming years.',
      authorImg: '/docs/images/authors/author-2.jpg',
      authorName: 'Jane Smith',
      readTime:"5 min read",

      date: 'April 12, 2021',
    },
        {
      img: img,
      category: 'Business',
      title: 'The future of AI in business',
      content: 'Exploring the potential impacts of AI on the business landscape in the coming years.',
      authorImg: '/docs/images/authors/author-2.jpg',
      authorName: 'Jane Smith',
      readTime:"5 min read",

      date: 'April 12, 2021',
    },
    {
      img: img,
      category: 'Health',
      title: 'Advances in medical technology',
      content: 'A look at the latest innovations in medical technology and their implications for healthcare.',
      authorImg: '/docs/images/authors/author-3.jpg',
      authorName: 'Emily Johnson',
      readTime:"5 min read",

      date: 'May 5, 2021',
    },
    // Add more card objects as needed
  ];

  return (
    <div className="w-screen h-max min-h-[100vh] flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="w-screen h-[30vh]">
        <div className="relative w-[90vw] h-[20vh] bg-blue-700 mx-auto rounded-[20px] flex items-center justify-center">
          <h1 className="text-white text-5xl">Blog</h1>
        </div>

        {/* Search Form */}
        <form className="max-w-md mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative -top-5">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-6 pl-10 text-md text-gray-900 border shadow-xl rounded-[15px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Mockups, Logos..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-md px-6 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Content Section */}
      <div className="flex-1 w-full overflow-hidden">
      {/* Breadcrumb Buttons */}
      <div className="w-full max-w-4xl mx-auto my-4 flex gap-3 overflow-x-auto scroll-smooth">
        {buttons.map((label, index) => (
          <BreadcrumbBtn label={label} key={index} />
        ))}
      </div>
    

        {/* Blog Cards */}
        <div className="h-max w-screen px-10">
          <div className="flex flex-wrap justify-between">
            {cardData.map((card, index) => (
              <BlogCard
                key={index}
                img={card.img}
                category={card.category}
                title={card.title}
                content={card.content}
                authorImg={card.authorImg}
                authorName={card.authorName}
                date={card.date}
                readTime={card.readTime}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
