import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation
import Navbar from "../Components/Navbar";
function Signup() {
  const navigate = useNavigate(); // Initialize navigate function

  const handleLoginClick = () => {
    navigate("/login"); // Navigate to the login page
  };
  return (
    <>
    <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold">Remade Sign Up</h1>
        </div>

        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:border-blue-500"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-500 p-2 rounded text-white font-semibold"
          >
            Continue
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="mt-2 text-sm">
            Already have an account?{" "}
            <a  className="text-blue-400 hover:underline" onClick={handleLoginClick}>
              Log In
            </a>
          </p>
          
        </div>

        <button className="w-full mt-4 bg-gray-700 hover:bg-gray-600 p-2 rounded text-white font-semibold">
          Continue with Google
        </button>
        <p className="mt-4 text-xs text-gray-500 text-center">
          By continuing, you agree to our{" "}
          <a  className="text-blue-400 hover:underline">
            Terms of Use
          </a>
        </p>
      </div>
    </div>
    </>
  );
}

export default Signup;
