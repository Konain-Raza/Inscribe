import React, { useState } from 'react';

const CreatePostForm = () => {
  const [formValues, setFormValues] = useState({
    coverPhoto: null,
    title: '',
    category: '',
    description: '',
    authorName: '',
    readTime: '',
  });

  const categories = ['Technology', 'Health', 'Finance', 'Lifestyle', 'Education', 'Travel'];


  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    setFormValues({
      coverPhoto: data.get("coverPhoto"),
      title: data.get("title"),
      category: data.get("category"),
      description: data.get("description"),
      authorName: data.get("authorname"),
      readTime: data.get("readtime"),
    })
    console.log(formValues)
  };

  return (
    <section className="flex items-center justify-center px-4 py-8 bg-gray-100 min-h-screen">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 md:p-10">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Create a New Blog Post
          </h1>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="coverPhoto" className="block mb-2 text-sm font-medium text-gray-700">
                Cover Photo
              </label>
              <input
                type="file"
                name="coverPhoto"
                id="coverPhoto"
                accept="image/*"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 focus:ring-blue-500 focus:border-blue-500"
           
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                type="text"
                name="title"
                id="title"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter the title of your blog post"
        
                required
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700">
                Category
              </label>
              <select
                name="category"
                id="category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 focus:ring-blue-500 focus:border-blue-500"
            
                required
              >
                <option value="" disabled>Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="authorName" className="block mb-2 text-sm font-medium text-gray-700">
                Author Name
              </label>
              <input
                type="text"
                name="authorname"
                id="authorName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your name"
              
                required
              />
            </div>

            <div className="flex-1">
              <label htmlFor="readTime" className="block mb-2 text-sm font-medium text-gray-700">
                Total Read Time (minutes)
              </label>
              <input
                type="number"
                name="readtime"
                id="readTime"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="e.g., 5"
                
                required
              />
            </div>
          </div>

          <div>
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">
              Description
            </label>
            <textarea
              name="description"
              id="description"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Write your blog post description here"
              
              rows="6"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center transition-colors duration-200 ease-in-out"
          >
            Create Post
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePostForm;
