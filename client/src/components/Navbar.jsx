import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import toast from "react-hot-toast";

export default function Navbar() {
  const { authUser, setAuthUser, logout } = useAuthContext();
  const navigate = useNavigate();

  const handleLogout = async () => {
    logout();
  };

  return (
    <nav className="w-full bg-white/10 backdrop-blur-lg border-b border-white/20 px-6 py-3 flex justify-between items-center shadow-md">
      {/* Logo */}
      <div
        onClick={() => navigate("/")}
        className="text-xl font-extrabold bg-gradient-to-r from-pink-400 to-purple-500 text-transparent bg-clip-text cursor-pointer"
      >
        watchyourhealth<span className="text-white">.com</span>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6">
        {/* Username */}
        {authUser && (
          <span className="text-sm text-gray-200">
            Hi, <span className="font-semibold">{authUser.name || "User"}</span>
          </span>
        )}

        {/* Sign Out Button */}
        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-medium hover:opacity-90 transition"
        >
          Sign Out
        </button>
      </div>
    </nav>
  );
}
