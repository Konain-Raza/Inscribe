import React, { useState } from "react";
import useStore from "../Store.js";
import { db, storage, ref, uploadBytes, getDownloadURL, collection, addDoc } from "../../firebase-config.js";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Ensure the CSS for the editor is imported

const CreatePostForm = () => {
  const [formValues, setFormValues] = useState({
    coverPhoto: null,
    title: "",
    category: "Technology",
    description: "",
    readTime: "",
    authorName: "",
    authorPicture: "",
  });
  const [isUploading, setIsUploading] = useState(false);
  const [description, setDescription] = useState("");

  const categories = [
    "Technology",
    "Health",
    "Finance",
    "Lifestyle",
    "Education",
    "Travel",
    "Food",
    "Entertainment",
    "Sports",
    "Science",
    "Business",
    "Fashion",
  ];

  const { user } = useStore();
  console.log(user)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsUploading(true);

    try {
      const coverPhoto = e.target.coverPhoto.files[0]; // Get file directly from event target

      let coverPhotoURL = "";
      if (coverPhoto) {
        const storageRef = ref(storage, `coverPhotos/${coverPhoto.name}`);
        const snapshot = await uploadBytes(storageRef, coverPhoto);
        coverPhotoURL = await getDownloadURL(snapshot.ref);
      }

      const postData = {
        coverPhotoURL,
        title: e.target.title.value,
        category: e.target.category.value,
        description: description,
        authorName: user ? user.username : "Anonymous",
        readTime: e.target.readTime.value,
        createdAt: new Date(),
        authorPicture: user ? user.photoURL : "",
        likeCount: 0,
      };

      await addDoc(collection(db, "posts"), postData);
      toast.success("Post successfully added to Firestore");
    } catch (error) {
      toast.error(`Error adding post to Firestore: ${error.message}`);
    } finally {
      setIsUploading(false);
      e.target.reset();
    }
    e.target.reset();

  };

  return (
    <section className="flex items-center justify-center px-4 py-8 min-h-screen bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6 md:p-10 dark:bg-gray-800">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center dark:text-gray-100">Create a New Blog Post</h1>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="coverPhoto" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Cover Photo</label>
              <input type="file" name="coverPhoto" id="coverPhoto" accept="image/*" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" required />
            </div>

            <div className="flex-1">
              <label htmlFor="title" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Title</label>
              <input type="text" name="title" id="title" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" placeholder="Enter the title of your blog post" required />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label htmlFor="category" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Category</label>
              <select name="category" id="category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" defaultValue={formValues.category} required>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="flex-1">
              <label htmlFor="readTime" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Total Read Time (minutes)</label>
              <input type="number" name="readTime" id="readTime" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-3 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" placeholder="e.g., 5" required />
            </div>
          </div>

          <div className="overflow-hidden">
            <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-400">Description</label>
            <ReactQuill value={description} onChange={setDescription} className="bg-gray-50 border border-gray-300  text-sm rounded-lg block w-full h-[400px] dark:bg-gray-700 dark:border-gray-600 dark:text-white text-black" placeholder="Write your blog post content here" />
          </div>

          <button type="submit" className={`w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-3 text-center transition-colors duration-200 ease-in-out ${isUploading ? "opacity-50 cursor-not-allowed" : ""}`} disabled={isUploading}>
            {isUploading ? "Uploading..." : "Create Post"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default CreatePostForm;
