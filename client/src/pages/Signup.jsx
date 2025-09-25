import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import LoadingAnimation from "../components/LoadingAnimation";

export default function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const onSignup = async () => {
    try {
      setLoading(true);
      const response = await axios.post("/api/auth/register", user);
      console.log(response.data);
      toast.success("Signup Successful. Please login.");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-blue-950 via-blue-900  to-gray-800">
      <div className="w-full max-w-md p-8 rounded-2xl shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center text-white mb-2">
          Create Account
        </h1>
        <p className="text-center text-gray-200 text-sm mb-8">
          Join us and get started in seconds
        </p>

        {/* Name */}
        <div className="w-full mb-4">
          <label htmlFor="name" className="block text-sm text-gray-200 mb-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={user.name}
            onChange={(e) => setUser({ ...user, name: e.target.value })}
            placeholder="Enter your name"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/30 transition"
          />
        </div>

        {/* Email */}
        <div className="w-full mb-4">
          <label htmlFor="email" className="block text-sm text-gray-200 mb-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/30 transition"
          />
        </div>

        {/* Password */}
        <div className="w-full mb-6">
          <label
            htmlFor="password"
            className="block text-sm text-gray-200 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Enter your password"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:bg-white/30 transition"
          />
        </div>

        {/* Button */}
        <button
          onClick={onSignup}
          disabled={loading}
          className="w-full py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold hover:shadow-lg hover:scale-[1.02] transition disabled:opacity-50"
        >
          {loading ? <LoadingAnimation /> : "Signup"}
        </button>

        {/* Divider */}
        <div className="flex items-center w-full my-6">
          <hr className="flex-grow border-gray-400/40" />
          <span className="mx-2 text-sm text-gray-300">or</span>
          <hr className="flex-grow border-gray-400/40" />
        </div>

        {/* Footer */}
        <p className="text-sm text-center text-gray-200">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-pink-400 hover:text-pink-500 font-medium transition"
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
