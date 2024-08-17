import React, { useState } from "react";
import {
  auth,
  provider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  db,
  setDoc,
  doc,
} from "../../firebase-config";
import { toast } from "react-toastify";
import useStore from "../Store.js";

const Auth = () => {
  const { setUser } = useStore();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    username: "",
  });
  const [loading, setLoading] = useState(false);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      setUser({
        uid: user.uid,
        email: user.email,
        username: user.displayName || formData.username,
        photoURL: user.photoURL,
      });
      e.target.reset();
      document.cookie = `user_uid=${user.uid}; expires=${new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toUTCString()}; path=/`;

    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const data = new FormData(e.target);
    const email = data.get("email");
    const password = data.get("password");
    const username = data.get("username");

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        avatar: user.photoURL,
        username: username,
        email: user.email,
      });
      setUser({
        uid: user.uid,
        email: user.email,
        username: user.displayName,
        photoURL: user.photoURL,
      });
      document.cookie = `user_uid=${user.uid}; expires=${new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toUTCString()}; path=/`;
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
      e.target.reset();
    }
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
   
      await setDoc(doc(db, "users", user.uid), {
        avatar: user.photoURL,
        username: user.displayName,
        email: user.email,
      });

      setUser({
        uid: user.uid,
        email: user.email,
        username: user.displayName,
        photoURL: user.photoURL,
      });
      document.cookie = `user_uid=${user.uid}; expires=${new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toUTCString()}; path=/`;
      toast.success("Signed in with Google!");
    } catch (error) {
      toast.error(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ email: "", password: "", username: "" });
  };

  return (
<section className="flex items-center justify-center px-6 h-[85vh] bg-white dark:bg-gray-900">
  <div className="w-full max-w-md bg-white rounded-lg shadow-xl dark:bg-gray-800">
    <div className="p-5 space-y-6">
      <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 dark:text-gray-100">
        {isLogin ? "Login" : "Create an account"}
      </h1>

      <form
        className="space-y-4 md:space-y-6"
        onSubmit={isLogin ? handleLoginSubmit : handleSignupSubmit}
      >
        {!isLogin && (
          <div>
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Your username"
              required
            />
          </div>
        )}
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            Your email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-100"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className="bg-gray-50 border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>

        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="terms"
              aria-describedby="terms"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600 focus:ring-3 focus:ring-blue-300"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-400">
              I accept the{" "}
              <a
                className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                href="#"
              >
                Terms and Conditions
              </a>
            </label>
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className={`w-full text-white ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          } dark:bg-blue-500 dark:hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
        >
          {loading ? "Loading..." : isLogin ? "Login" : "Create an account"}
        </button>
      </form>

      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
        {isLogin ? (
          <>
            Don't have an account?{" "}
            <a
              href="#"
              onClick={handleToggle}
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Sign up here
            </a>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <a
              href="#"
              onClick={handleToggle}
              className="font-medium text-blue-600 hover:underline dark:text-blue-400"
            >
              Login here
            </a>
          </>
        )}
      </p>

      <button
        onClick={handleGoogleSignIn}
        type="button"
        disabled={loading} // Disable button if loading
        className={`w-full flex items-center justify-center ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-700"
        } text-gray-900 dark:text-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5 mr-2"
          x="0px"
          y="0px"
          viewBox="0 0 48 48"
        >
          <path
            fill="#FFC107"
            d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
          <path
            fill="#FF3D00"
            d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
          ></path>
          <path
            fill="#4CAF50"
            d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
          ></path>
          <path
            fill="#1976D2"
            d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
          ></path>
        </svg>
        Sign in with Google
      </button>
    </div>
  </div>
</section>

  );
};

export default Auth;
