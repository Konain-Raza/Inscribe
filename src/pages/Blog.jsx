import React, { useEffect, useState } from "react";
import BreadcrumbBtn from "../Components/BreadcrumbBtn";
import BlogCard from "../Components/BlogCard";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase-config";
import { toast } from "react-toastify";
import "../index.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchPostsAndCategories = async () => {
      try {
        const postRef = collection(db, "posts");
        const postSnapshot = await getDocs(postRef);

        const postList = postSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setPosts(postList);
        setFilteredPosts(postList);

        const categorySet = new Set(postList.map((post) => post.category));
        setCategories(["All", ...categorySet]);
      } catch (error) {
        toast.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPostsAndCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.category === selectedCategory)
      );
    }
  }, [selectedCategory, posts]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="w-screen h-max min-h-[100vh] flex flex-col items-center justify-center dark:bg-gray-900 dark:text-white">
      <div className="w-screen h-[30vh]">
        <div className="relative w-[90vw] h-[20vh] bg-blue-700 mx-auto rounded-[20px] flex items-center justify-center dark:bg-blue-900">
          <h1 className="text-white text-5xl">Blog</h1>
        </div>

        <form className="max-w-md mx-auto">
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
              className="block w-full p-6 pl-10 text-md text-gray-900 border shadow-xl rounded-[15px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:placeholder-gray-400"
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

      {loading ? (
        <div className="w-full flex h-[70vh] justify-center items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20rem]"
            viewBox="0 0 200 200"
            class="pencil"
          >
            <defs>
              <clipPath id="pencil-eraser">
                <rect height="30" width="30" ry="5" rx="5"></rect>
              </clipPath>
            </defs>
            <circle
              transform="rotate(-113,100,100)"
              stroke-linecap="round"
              stroke-dashoffset="439.82"
              stroke-dasharray="439.82 439.82"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              r="70"
              class="pencil__stroke"
            ></circle>
            <g transform="translate(100,100)" class="pencil__rotate">
              <g fill="none">
                <circle
                  transform="rotate(-90)"
                  stroke-dashoffset="402"
                  stroke-dasharray="402.12 402.12"
                  stroke-width="30"
                  stroke="hsl(223,90%,50%)"
                  r="64"
                  class="pencil__body1"
                ></circle>
                <circle
                  transform="rotate(-90)"
                  stroke-dashoffset="465"
                  stroke-dasharray="464.96 464.96"
                  stroke-width="10"
                  stroke="hsl(223,90%,60%)"
                  r="74"
                  class="pencil__body2"
                ></circle>
                <circle
                  transform="rotate(-90)"
                  stroke-dashoffset="339"
                  stroke-dasharray="339.29 339.29"
                  stroke-width="10"
                  stroke="hsl(223,90%,40%)"
                  r="54"
                  class="pencil__body3"
                ></circle>
              </g>
              <g transform="rotate(-90) translate(49,0)" class="pencil__eraser">
                <g class="pencil__eraser-skew">
                  <rect
                    height="30"
                    width="30"
                    ry="5"
                    rx="5"
                    fill="hsl(223,90%,70%)"
                  ></rect>
                  <rect
                    clip-path="url(#pencil-eraser)"
                    height="30"
                    width="5"
                    fill="hsl(223,90%,60%)"
                  ></rect>
                  <rect height="20" width="30" fill="hsl(223,10%,90%)"></rect>
                  <rect height="20" width="15" fill="hsl(223,10%,70%)"></rect>
                  <rect height="20" width="5" fill="hsl(223,10%,80%)"></rect>
                  <rect
                    height="2"
                    width="30"
                    y="6"
                    fill="hsla(223,10%,10%,0.2)"
                  ></rect>
                  <rect
                    height="2"
                    width="30"
                    y="13"
                    fill="hsla(223,10%,10%,0.2)"
                  ></rect>
                </g>
              </g>
              <g
                transform="rotate(-90) translate(49,-30)"
                class="pencil__point"
              >
                <polygon
                  points="15 0,30 30,0 30"
                  fill="hsl(33,90%,70%)"
                ></polygon>
                <polygon
                  points="15 0,6 30,0 30"
                  fill="hsl(33,90%,50%)"
                ></polygon>
                <polygon
                  points="15 0,20 10,10 10"
                  fill="hsl(223,10%,10%)"
                ></polygon>
              </g>
            </g>
          </svg>
        </div>
      ) : (
        <div className="flex-1 w-full overflow-hidden">
          <div className="w-full max-w-[90%] no-scrollbar mx-auto my-4 py-2 px-2 flex gap-3 overflow-x-auto scroll-smooth whitespace-nowrap">
            {categories.map((label, index) => (
              <BreadcrumbBtn
                key={index}
                label={label}
                onClick={() => handleCategoryClick(label)}
                active={selectedCategory === label}
              />
            ))}
          </div>

          <div className="h-max w-screen px-10">
            <div className="flex flex-wrap justify-around dark:bg-gray-900">
              {filteredPosts.map((card) => (
                <BlogCard
                  key={card.id}
                  id={card.id}
                  img={card.coverPhotoURL}
                  category={card.category}
                  title={card.title}
                  content={card.description}
                  authorImg={card.authorPicture}
                  authorName={card.authorName}
                  date={card.createdAt.toDate().toLocaleDateString("en-US")}
                  likeCount={card.likeCount}
                  readTime={card.readTime}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Blog;
