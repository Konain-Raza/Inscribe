// Store.js
import { create } from 'zustand';

const useStore = create((set) => ({
  user: {
    // uid: "",
    email: "",
    username: "",
    photurl: "",
  },
  blogs: [],
  setUser: (user) => set({ user }),
  updateBlogs: (allBlogs) => set({ blogs: allBlogs }),
}));

export default useStore;
