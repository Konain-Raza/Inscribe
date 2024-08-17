import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase-config";
import { collection, query, where, getDocs, doc, deleteDoc, updateDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const [editingBlog, setEditingBlog] = useState(null);
  const [editContent, setEditContent] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      const user = auth.currentUser;
      if (user) {
        const blogsRef = collection(db, "blogs");
        const q = query(blogsRef, where("authorId", "==", user.uid));
        const querySnapshot = await getDocs(q);
        const fetchedBlogs = [];
        querySnapshot.forEach((doc) => {
          fetchedBlogs.push({ id: doc.id, ...doc.data() });
        });
        setBlogs(fetchedBlogs);
      }
    };
    fetchBlogs();
  }, []);

  const handleDelete = async (blogId) => {
    try {
      await deleteDoc(doc(db, "blogs", blogId));
      setBlogs(blogs.filter((blog) => blog.id !== blogId));
      toast.success("Blog deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete the blog.");
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setEditContent(blog.content);
  };

  const handleEditSubmit = async () => {
    if (!editingBlog) return;
    try {
      await updateDoc(doc(db, "blogs", editingBlog.id), {
        content: editContent,
      });
      setBlogs(blogs.map((blog) => (blog.id === editingBlog.id ? { ...blog, content: editContent } : blog)));
      setEditingBlog(null);
      toast.success("Blog updated successfully!");
    } catch (error) {
      toast.error("Failed to update the blog.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 md:p-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Your Blogs</h1>
        {blogs.length === 0 ? (
          <p className="text-gray-500">No blogs found.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog.id} className="bg-white rounded-lg shadow-md p-5 border border-gray-200">
                <h2 className="text-xl font-semibold text-gray-700">{blog.title}</h2>
                <p className="text-gray-600 mt-2">{blog.content}</p>
                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition duration-200"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition duration-200"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {editingBlog && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
              <h2 className="text-2xl font-bold mb-4">Edit Blog</h2>
              <textarea
                value={editContent}
                onChange={(e) => setEditContent(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg mb-4"
                rows="5"
              ></textarea>
              <div className="flex justify-end space-x-4">
                <button
                  onClick={() => setEditingBlog(null)}
                  className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleEditSubmit}
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
